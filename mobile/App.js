import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import TodayChoiceScreen from './src/screens/TodayChoiceScreen';
import ReadingScreen from './src/screens/ReadingScreen';
import QuizScreen from './src/screens/QuizScreen';
import CompletionScreen from './src/screens/CompletionScreen';

import api from './src/api/client';

const USER_ID_KEY = 'gitaDaily.userId';

export default function App() {
  const [userId, setUserId] = useState(null);
  const [cachedUser, setCachedUser] = useState(null);  // avoids HomeScreen re-fetching on launch
  const [checking, setChecking] = useState(true);
  const [screen, setScreen] = useState('login');
  const [signupData, setSignupData] = useState(null);
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
  const handleLogin = async (newUserId) => {
    await AsyncStorage.setItem(USER_ID_KEY, newUserId);
    setUserId(newUserId);
    setCachedUser(null);  // HomeScreen will fetch fresh on login
    setScreen('home');
  };

  const handleGoToSignup = () => setScreen('signup');
  const handleBackToLogin = () => setScreen('login');

  const handleSignupNext = (data) => {
    setSignupData(data);
    setScreen('onboarding');
  };

  const handleUserCreated = async (newUserId) => {
    await AsyncStorage.setItem(USER_ID_KEY, newUserId);
    setUserId(newUserId);
    setSignupData(null);
    setCachedUser(null);  // fresh user — HomeScreen will fetch
    setScreen('home');
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem(USER_ID_KEY);
    setUserId(null);
    setActiveContent(null);
    setLastResult(null);
    setScreen('login');
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
    return <LoginScreen onLogin={handleLogin} onSignup={handleGoToSignup} />;
  }

  if (screen === 'signup') {
    return <SignupScreen onBack={handleBackToLogin} onNext={handleSignupNext} />;
  }

  if (screen === 'onboarding') {
    return <OnboardingScreen signupData={signupData} onComplete={handleUserCreated} />;
  }

  // ── Main app ──
  return (
    <View style={{ flex: 1, backgroundColor: '#0D0500' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0500" />

      {screen === 'home' && (
        <HomeScreen userId={userId} initialUser={cachedUser} onBegin={handleBegin} onLogout={handleLogout} onBrowse={handleBrowse} />
      )}
      {screen === 'browse' && (
        <BrowseScreen userId={userId} onOpenPart={handleOpenPart} onBack={handleBackFromBrowse} />
      )}
      {screen === 'todayChoice' && (
        <TodayChoiceScreen userId={userId} onSelect={handleChoiceSelect} />
      )}
      {screen === 'reading' && activeContent && (
        <ReadingScreen content={activeContent} mode={activeMode} onContinue={handleReadingContinue} />
      )}
      {screen === 'quiz' && activeContent && (
        <QuizScreen userId={userId} content={activeContent} onDone={handleQuizDone} />
      )}
      {screen === 'completion' && lastResult && (
        <CompletionScreen
          userId={userId}
          result={lastResult}
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