import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { GOOGLE_WEB_CLIENT_ID } from './src/config';
import LoginScreen from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import TodayChoiceScreen from './src/screens/TodayChoiceScreen';
import ReadingScreen from './src/screens/ReadingScreen';
import QuizScreen from './src/screens/QuizScreen';
import CompletionScreen from './src/screens/CompletionScreen';

import api from './src/api/client';

const USER_ID_KEY = 'gitaDaily.userId';

GoogleSignin.configure({ webClientId: GOOGLE_WEB_CLIENT_ID });

export default function App() {
  const [userId, setUserId] = useState(null);
  const [cachedUser, setCachedUser] = useState(null);  // avoids HomeScreen re-fetching on launch
  const [lang, setLang] = useState('en');  // drives UI text across every post-auth screen
  const [checking, setChecking] = useState(true);
  const [screen, setScreen] = useState('login');
  const [activeContent, setActiveContent] = useState(null);
  const [activeMode, setActiveMode] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const [skipBusy, setSkipBusy] = useState(false);

  // ── Restore session ──
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(USER_ID_KEY);
        if (saved) {
          // Fetch user once here — pass it to HomeScreen so it doesn't fetch again
          const user = await api.getUser(saved);
          setUserId(saved);
          setCachedUser(user);
          setLang(user.preferred_language || 'en');
          setScreen('home');
        }
      } catch {
        await AsyncStorage.removeItem(USER_ID_KEY);
      } finally {
        setChecking(false);
      }
    })();
  }, []);

  // ── Handlers ──
  // Called after LoginScreen exchanges a Google idToken for a user record.
  // needsOnboarding is true both for brand-new accounts and for anyone who
  // signed in before but never finished picking language/state/pace.
  const handleGoogleAuth = async (user, needsOnboarding) => {
    await AsyncStorage.setItem(USER_ID_KEY, user.id);
    setUserId(user.id);
    setCachedUser(needsOnboarding ? null : user);
    if (!needsOnboarding) setLang(user.preferred_language || 'en');
    setScreen(needsOnboarding ? 'onboarding' : 'home');
  };

  // chosenLanguage comes straight from OnboardingScreen's step 1 pick, so the rest of
  // the app reflects it immediately without waiting on a fresh user fetch.
  const handleOnboardingComplete = (chosenLanguage) => {
    setCachedUser(null);  // preferences just changed — HomeScreen will fetch fresh
    setLang(chosenLanguage || 'en');
    setScreen('home');
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem(USER_ID_KEY);
    setUserId(null);
    setActiveContent(null);
    setLastResult(null);
    setScreen('login');
  };

  const handleOpenSettings = () => setScreen('settings');
  const handleBackFromSettings = () => setScreen('home');

  const handleResetProgress = async () => {
    await api.resetProgress(userId);
    setCachedUser(null);  // HomeScreen will fetch the reset stats
    setScreen('home');
  };

  const handleBegin = () => setScreen('todayChoice');
  const handleBrowse = () => setScreen('browse');
  const handleBackFromBrowse = () => setScreen('home');

  const handleOpenPart = async (part, mode) => {
    if (mode === 'next') { setScreen('todayChoice'); return; }
    try {
      const data = await api.getPart(part.id);
      setActiveContent(data);
      setActiveMode('review');
      setScreen('reading');
    } catch (e) { console.error(e); }
  };

  const handleChoiceSelect = async (mode, content) => {
    setActiveContent(content);
    setActiveMode(mode);
    if (mode === 'skip') {
      setSkipBusy(true);
      try {
        const result = await api.submitReading({ userId, partId: content.part.id, mode: 'skip' });
        setLastResult(result);
        setScreen('home');
      } catch (e) { console.error(e); }
      finally { setSkipBusy(false); }
      return;
    }
    setScreen('reading');
  };

  const handleReadingContinue = async (mode, content) => {
    if (mode === 'review') { setScreen('browse'); return; }
    if (mode === 'full') { setScreen('quiz'); return; }
    try {
      const result = await api.submitReading({ userId, partId: content.part.id, mode: 'quick' });
      setLastResult(result);
      setScreen('completion');
    } catch (e) { console.error(e); }
  };

  const handleQuizDone = (result) => { setLastResult(result); setScreen('completion'); };
  const handleContinueReading = () => setScreen('todayChoice');
  const handleStopForToday = () => setScreen('home');

  // ── Loading splash ──
  if (checking || skipBusy) {
    return (
      <View style={st.splash}>
        <LinearGradient colors={['#0D0500', '#1C0900']} style={StyleSheet.absoluteFillObject} />
        <ActivityIndicator color="#D4AF37" size="large" />
      </View>
    );
  }

  // ── Auth flow ──
  if (screen === 'login') {
    return <LoginScreen onGoogleAuth={handleGoogleAuth} />;
  }

  if (screen === 'onboarding') {
    return <OnboardingScreen userId={userId} onComplete={handleOnboardingComplete} />;
  }

  // ── Main app ──
  return (
    <View style={{ flex: 1, backgroundColor: '#0D0500' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0500" />

      {screen === 'home' && (
        <HomeScreen userId={userId} initialUser={cachedUser} lang={lang} onBegin={handleBegin} onOpenSettings={handleOpenSettings} onBrowse={handleBrowse} />
      )}
      {screen === 'settings' && (
        <SettingsScreen
          userId={userId}
          initialUser={cachedUser}
          lang={lang}
          onBack={handleBackFromSettings}
          onLogout={handleLogout}
          onResetProgress={handleResetProgress}
        />
      )}
      {screen === 'browse' && (
        <BrowseScreen userId={userId} lang={lang} onOpenPart={handleOpenPart} onBack={handleBackFromBrowse} />
      )}
      {screen === 'todayChoice' && (
        <TodayChoiceScreen userId={userId} lang={lang} onSelect={handleChoiceSelect} />
      )}
      {screen === 'reading' && activeContent && (
        <ReadingScreen content={activeContent} mode={activeMode} lang={lang} onContinue={handleReadingContinue} />
      )}
      {screen === 'quiz' && activeContent && (
        <QuizScreen userId={userId} content={activeContent} lang={lang} onDone={handleQuizDone} />
      )}
      {screen === 'completion' && lastResult && (
        <CompletionScreen
          userId={userId}
          result={lastResult}
          lang={lang}
          onContinue={handleContinueReading}
          onStop={handleStopForToday}
        />
      )}
    </View>
  );
}

const st = StyleSheet.create({
  splash: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0D0500' },
});