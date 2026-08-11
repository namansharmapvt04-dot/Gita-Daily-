import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput,
  ActivityIndicator, FlatList, StatusBar, KeyboardAvoidingView, Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/client';

const LANGUAGES = [
  { code: 'en', label: 'English', sub: 'English', available: true },
  { code: 'hi', label: 'हिन्दी', sub: 'Hindi', available: true },
  { code: 'ta', label: 'தமிழ்', sub: 'Tamil', available: false },
  { code: 'te', label: 'తెలుగు', sub: 'Telugu', available: false },
  { code: 'bn', label: 'বাংলা', sub: 'Bengali', available: false },
];

const PACE_OPTIONS = [
  { value: 'short', label: 'Quick  ~2 min', sub: 'A verse or two to start the day', icon: 'flash-outline' },
  { value: 'medium', label: 'Balanced  ~5 min', sub: 'A meaningful daily portion', icon: 'book-outline' },
  { value: 'long', label: 'Deep  ~10 min', sub: 'Full parts with rich reflection', icon: 'library-outline' },
];

const STEPS = 4;

export default function OnboardingScreen({ userId, onComplete }) {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState(null);
  const [states, setStates] = useState([]);
  const [statesLoading, setStatesLoading] = useState(true);
  const [statesError, setStatesError] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [stateSearch, setStateSearch] = useState('');
  const [pace, setPace] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    api.getStates()
      .then((data) => { setStates(data); setStatesLoading(false); })
      .catch((e) => { setStatesError(e.message); setStatesLoading(false); });
  }, []);

  const filteredStates = states.filter(s =>
    s.name.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const handleFinish = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      await api.updateUserPrefs(userId, {
        preferredLanguage: language,
        stateId: selectedState.id,
        dailyPace: pace,
      });
      onComplete();
    } catch (e) {
      setSubmitError(e.message);
      setSubmitting(false);
    }
  };

  const retryStates = () => {
    setStatesLoading(true);
    setStatesError(null);
    api.getStates()
      .then((data) => { setStates(data); setStatesLoading(false); })
      .catch((e) => { setStatesError(e.message); setStatesLoading(false); });
  };

  const stepTitles = [
    'Your Language',
    'Your State',
    'Daily Pace',
    'All Set',
  ];

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0500" />
      <LinearGradient
        colors={['#0D0500', '#1C0900', '#2E1100', '#3D1600']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      />
      <View style={s.glow1} />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={s.container}>

          {/* Progress bar */}
          <View style={s.progressWrap}>
            {Array.from({ length: STEPS }).map((_, i) => (
              <View key={i} style={s.progressSegWrap}>
                <LinearGradient
                  colors={i < step ? ['#D4AF37', '#B8920A'] : ['rgba(212,175,55,0.18)', 'rgba(212,175,55,0.18)']}
                  style={s.progressSeg}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
            ))}
          </View>

          {/* Step label */}
          <Text style={s.stepLabel}>Step {step} of {STEPS}  ·  {stepTitles[step - 1]}</Text>

          {/* ── STEP 1: Language ── */}
          {step === 1 && (
            <View style={s.stepContent}>
              <Text style={s.title}>Which language?</Text>
              <Text style={s.subtitle}>You can change this anytime in settings.</Text>
              <View style={s.optionList}>
                {LANGUAGES.map((lang) => (
                  <TouchableOpacity
                    key={lang.code}
                    style={[
                      s.optionRow,
                      language === lang.code && s.optionSelected,
                      !lang.available && s.optionDisabled,
                    ]}
                    onPress={() => {
                      if (!lang.available) return;
                      setLanguage(lang.code);
                      setTimeout(() => setStep(2), 180);
                    }}
                    activeOpacity={lang.available ? 0.8 : 1}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={[
                        s.optionText,
                        language === lang.code && s.optionTextSelected,
                        !lang.available && s.optionTextDisabled,
                      ]}>{lang.label}</Text>
                      <Text style={s.optionSub}>{lang.sub}</Text>
                    </View>
                    {!lang.available ? (
                      <View style={s.comingSoonBadge}>
                        <Text style={s.comingSoonText}>Coming soon</Text>
                      </View>
                    ) : language === lang.code && (
                      <Ionicons name="checkmark-circle" size={20} color="#D4AF37" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* ── STEP 2: State ── */}
          {step === 2 && (
            <View style={[s.stepContent, { flex: 1 }]}>
              <Text style={s.title}>Which state?</Text>
              <Text style={s.subtitle}>You'll be ranked with readers in your city.</Text>

              {statesLoading && (
                <View style={s.centeredMsg}>
                  <ActivityIndicator color="#D4AF37" size="large" />
                </View>
              )}

              {statesError && (
                <View style={s.centeredMsg}>
                  <Text style={s.errorText}>Couldn't load states.</Text>
                  <TouchableOpacity onPress={retryStates} style={s.retryBtn}>
                    <Text style={s.retryText}>Try again</Text>
                  </TouchableOpacity>
                </View>
              )}

              {!statesLoading && !statesError && (
                <>
                  {/* Search */}
                  <View style={s.searchWrap}>
                    <Ionicons name="search-outline" size={16} color="#7A5C34" style={{ marginRight: 8 }} />
                    <TextInput
                      style={s.searchInput}
                      placeholder="Search state..."
                      placeholderTextColor="#7A5C34"
                      value={stateSearch}
                      onChangeText={setStateSearch}
                    />
                    {stateSearch.length > 0 && (
                      <TouchableOpacity onPress={() => setStateSearch('')}>
                        <Ionicons name="close-circle" size={16} color="#7A5C34" />
                      </TouchableOpacity>
                    )}
                  </View>

                  <FlatList
                    data={filteredStates}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[s.optionRow, selectedState?.id === item.id && s.optionSelected]}
                        onPress={() => { setSelectedState(item); setTimeout(() => setStep(3), 180); }}
                        activeOpacity={0.8}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={[s.optionText, selectedState?.id === item.id && s.optionTextSelected]}>
                            {item.name}
                          </Text>
                          <Text style={s.optionSub}>{item.main_city}</Text>
                        </View>
                        {selectedState?.id === item.id && (
                          <Ionicons name="checkmark-circle" size={20} color="#D4AF37" />
                        )}
                      </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    style={{ flex: 1 }}
                  />
                </>
              )}
            </View>
          )}

          {/* ── STEP 3: Pace ── */}
          {step === 3 && (
            <View style={s.stepContent}>
              <Text style={s.title}>How much time daily?</Text>
              <Text style={s.subtitle}>We'll size your daily reading to fit your day.</Text>
              <View style={s.optionList}>
                {PACE_OPTIONS.map((p) => (
                  <TouchableOpacity
                    key={p.value}
                    style={[s.paceCard, pace === p.value && s.optionSelected]}
                    onPress={() => setPace(p.value)}
                    activeOpacity={0.8}
                  >
                    <View style={[s.paceIconWrap, pace === p.value && s.paceIconWrapSelected]}>
                      <Ionicons name={p.icon} size={20} color={pace === p.value ? '#0D0500' : '#D4AF37'} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={[s.optionText, pace === p.value && s.optionTextSelected]}>{p.label}</Text>
                      <Text style={s.optionSub}>{p.sub}</Text>
                    </View>
                    {pace === p.value && <Ionicons name="checkmark-circle" size={20} color="#D4AF37" />}
                  </TouchableOpacity>
                ))}
              </View>

              {submitError && (
                <View style={s.errorBox}>
                  <Ionicons name="alert-circle" size={15} color="#FF6B6B" />
                  <Text style={s.errorText}>{submitError}</Text>
                </View>
              )}

              <TouchableOpacity
                onPress={handleFinish}
                disabled={!pace || submitting}
                activeOpacity={0.85}
                style={{ marginTop: 8 }}
              >
                <LinearGradient
                  colors={pace ? ['#D4AF37', '#B8920A', '#9A7A00'] : ['rgba(212,175,55,0.3)', 'rgba(212,175,55,0.3)']}
                  style={s.finishBtn}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  {submitting
                    ? <ActivityIndicator color="#0D0500" size="small" />
                    : <Text style={s.finishBtnText}>Begin My Journey  ✦</Text>}
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}

          {/* Back button for steps > 1 */}
          {step > 1 && (
            <TouchableOpacity style={s.backBtn} onPress={() => setStep(step - 1)}>
              <Ionicons name="arrow-back" size={16} color="#C9A96E" />
              <Text style={s.backText}>Back</Text>
            </TouchableOpacity>
          )}

        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  glow1: { position: 'absolute', width: 300, height: 300, borderRadius: 150, backgroundColor: 'rgba(212,175,55,0.05)', top: -80, right: -80 },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 60, paddingBottom: 24 },
  progressWrap: { flexDirection: 'row', gap: 6, marginBottom: 12 },
  progressSegWrap: { flex: 1, height: 4, borderRadius: 4, overflow: 'hidden' },
  progressSeg: { flex: 1 },
  stepLabel: { fontSize: 12, color: '#7A5C34', letterSpacing: 0.5, marginBottom: 28, textTransform: 'uppercase' },
  stepContent: { flex: 1 },
  title: { fontSize: 22, fontWeight: '700', color: '#FFF8F0', marginBottom: 6 },
  subtitle: { fontSize: 13, color: '#C9A96E', marginBottom: 20 },
  optionList: { gap: 10 },
  optionRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(255,248,240,0.05)', borderRadius: 14,
    borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)',
    padding: 16,
  },
  optionSelected: { borderColor: '#D4AF37', backgroundColor: 'rgba(212,175,55,0.10)' },
  optionDisabled: { opacity: 0.45 },
  optionText: { fontSize: 15, color: '#FFF8F0', fontWeight: '500' },
  optionTextSelected: { color: '#D4AF37' },
  optionTextDisabled: { color: '#C9A96E' },
  optionSub: { fontSize: 12, color: '#7A5C34', marginTop: 2 },
  comingSoonBadge: {
    paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20,
    backgroundColor: 'rgba(212,175,55,0.12)', borderWidth: 1, borderColor: 'rgba(212,175,55,0.25)',
  },
  comingSoonText: { fontSize: 10, fontWeight: '700', color: '#C9A96E', letterSpacing: 0.3 },
  paceCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: 'rgba(255,248,240,0.05)', borderRadius: 14,
    borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)',
    padding: 16,
  },
  paceIconWrap: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(212,175,55,0.12)', alignItems: 'center', justifyContent: 'center' },
  paceIconWrapSelected: { backgroundColor: '#D4AF37' },
  centeredMsg: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  searchWrap: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(255,248,240,0.06)', borderRadius: 12,
    borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)',
    paddingHorizontal: 12, paddingVertical: 10, marginBottom: 12,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#FFF8F0', padding: 0 },
  finishBtn: { borderRadius: 14, paddingVertical: 15, alignItems: 'center', elevation: 4 },
  finishBtnText: { fontSize: 16, fontWeight: '700', color: '#0D0500', letterSpacing: 0.5 },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 16, alignSelf: 'flex-start' },
  backText: { fontSize: 13, color: '#C9A96E' },
  retryBtn: { marginTop: 10, paddingVertical: 8, paddingHorizontal: 20, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)' },
  retryText: { color: '#D4AF37', fontSize: 13 },
  errorBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,107,107,0.10)', borderRadius: 10, padding: 10, marginBottom: 10, gap: 8 },
  errorText: { fontSize: 13, color: '#FF6B6B', flex: 1 },
});