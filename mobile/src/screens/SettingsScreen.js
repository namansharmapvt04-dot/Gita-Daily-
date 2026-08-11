import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import api from '../api/client';

function initials(name = '') {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
}

const C = {
  bg: '#0D0500', gold: '#D4AF37', textPrimary: '#FFF8F0', textSecond: '#C9A96E',
  textMuted: '#7A5C34', goldBorder: 'rgba(212,175,55,0.28)', danger: '#FF6B6B',
};

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
];

const STRINGS = {
  en: {
    title: 'Settings',
    readerFallback: 'Reader',
    languageRow: 'Language',
    restartRow: 'Restart reading from the beginning',
    confirmText: "This clears your streak, score, and reading history. This can't be undone.",
    cancel: 'Cancel',
    restart: 'Restart',
    signOut: 'Sign out',
  },
  hi: {
    title: 'सेटिंग्स',
    readerFallback: 'पाठक',
    languageRow: 'भाषा',
    restartRow: 'शुरुआत से पढ़ाई फिर से शुरू करें',
    confirmText: 'इससे आपकी स्ट्रीक, स्कोर और पढ़ाई का इतिहास मिट जाएगा। यह वापस नहीं किया जा सकता।',
    cancel: 'रद्द करें',
    restart: 'फिर से शुरू करें',
    signOut: 'साइन आउट करें',
  },
};

export default function SettingsScreen({ userId, initialUser, lang, onBack, onLogout, onResetProgress, onChangeLanguage }) {
  const [user, setUser] = useState(initialUser || null);
  const [loading, setLoading] = useState(!initialUser);
  const [confirmingReset, setConfirmingReset] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [changingLang, setChangingLang] = useState(false);
  const t = STRINGS[lang] || STRINGS.en;

  const handleSelectLanguage = async (code) => {
    if (code === lang || changingLang) return;
    setChangingLang(true);
    try {
      await onChangeLanguage(code);
    } finally {
      setChangingLang(false);
    }
  };

  const load = useCallback(async () => {
    try {
      const data = await api.getUser(userId);
      setUser(data);
    } catch {
      // Non-fatal — keep showing whatever we already have (or nothing).
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => { load(); }, [load]);

  const handleSignOut = async () => {
    try { await GoogleSignin.signOut(); } catch { /* not signed in via native SDK yet — fine */ }
    onLogout();
  };

  const handleConfirmReset = async () => {
    setResetting(true);
    try {
      await onResetProgress();
    } finally {
      setResetting(false);
      setConfirmingReset(false);
    }
  };

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />
      <LinearGradient
        colors={['#0D0500', '#1C0900', '#2E1100', '#3D1600']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }}
      />

      <View style={s.topBar}>
        <TouchableOpacity onPress={onBack} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color={C.textSecond} />
        </TouchableOpacity>
        <Text style={s.topTitle}>{t.title}</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator color={C.gold} size="large" style={{ marginTop: 40 }} />
        ) : (
          <>
            {/* ── Account card ── */}
            <View style={s.accountCard}>
              <View style={s.avatar}>
                <Text style={s.avatarText}>{initials(user?.name || '')}</Text>
              </View>
              <Text style={s.accountName}>{user?.name || t.readerFallback}</Text>
              {!!user?.email && <Text style={s.accountEmail}>{user.email}</Text>}
            </View>

            {/* ── Language ── */}
            <View style={s.section}>
              <View style={s.languageHeader}>
                <Ionicons name="language-outline" size={19} color={C.textSecond} />
                <Text style={s.rowText}>{t.languageRow}</Text>
                {changingLang && <ActivityIndicator color={C.gold} size="small" />}
              </View>
              <View style={s.languageOptions}>
                {LANGUAGES.map((l) => (
                  <TouchableOpacity
                    key={l.code}
                    style={[s.languagePill, lang === l.code && s.languagePillActive]}
                    onPress={() => handleSelectLanguage(l.code)}
                    disabled={changingLang}
                    activeOpacity={0.85}
                  >
                    <Text style={[s.languagePillText, lang === l.code && s.languagePillTextActive]}>
                      {l.label}
                    </Text>
                    {lang === l.code && (
                      <Ionicons name="checkmark-circle" size={15} color={C.bg} style={{ marginLeft: 6 }} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* ── Options ── */}
            <View style={s.section}>
              {!confirmingReset ? (
                <TouchableOpacity style={s.row} onPress={() => setConfirmingReset(true)}>
                  <Ionicons name="refresh-outline" size={19} color={C.textSecond} />
                  <Text style={s.rowText}>{t.restartRow}</Text>
                  <Ionicons name="chevron-forward" size={16} color="rgba(212,175,55,0.4)" />
                </TouchableOpacity>
              ) : (
                <View style={s.confirmBox}>
                  <Text style={s.confirmText}>
                    {t.confirmText}
                  </Text>
                  <View style={s.confirmActions}>
                    <TouchableOpacity
                      style={s.confirmCancel}
                      onPress={() => setConfirmingReset(false)}
                      disabled={resetting}
                    >
                      <Text style={s.confirmCancelText}>{t.cancel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={s.confirmDanger}
                      onPress={handleConfirmReset}
                      disabled={resetting}
                    >
                      {resetting ? (
                        <ActivityIndicator color={C.textPrimary} size="small" />
                      ) : (
                        <Text style={s.confirmDangerText}>{t.restart}</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>

            <View style={s.section}>
              <TouchableOpacity style={s.row} onPress={handleSignOut}>
                <Ionicons name="log-out-outline" size={19} color={C.danger} />
                <Text style={[s.rowText, { color: C.danger }]}>{t.signOut}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  topBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 54, paddingBottom: 16,
  },
  topTitle: { fontSize: 17, fontWeight: '700', color: C.textPrimary, letterSpacing: 0.5 },
  scroll: { paddingHorizontal: 20, paddingBottom: 48 },

  accountCard: {
    alignItems: 'center', paddingVertical: 28, marginBottom: 24,
    backgroundColor: 'rgba(255,248,240,0.035)', borderRadius: 18,
    borderWidth: 1, borderColor: C.goldBorder,
  },
  avatar: {
    width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(212,175,55,0.15)',
    alignItems: 'center', justifyContent: 'center', marginBottom: 12,
    borderWidth: 1, borderColor: C.goldBorder,
  },
  avatarText: { fontSize: 22, fontWeight: '700', color: C.gold },
  accountName: { fontSize: 17, fontWeight: '700', color: C.textPrimary, marginBottom: 4 },
  accountEmail: { fontSize: 13, color: C.textMuted },

  section: {
    marginBottom: 16, borderRadius: 14, overflow: 'hidden',
    backgroundColor: 'rgba(255,248,240,0.035)', borderWidth: 1, borderColor: C.goldBorder,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 },
  rowText: { flex: 1, fontSize: 14, color: C.textPrimary, fontWeight: '600' },

  languageHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingTop: 16 },
  languageOptions: { flexDirection: 'row', gap: 10, padding: 16, paddingTop: 12 },
  languagePill: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10,
    borderRadius: 20, borderWidth: 1, borderColor: C.goldBorder,
  },
  languagePillActive: { backgroundColor: C.gold, borderColor: C.gold },
  languagePillText: { fontSize: 13, fontWeight: '600', color: C.textSecond },
  languagePillTextActive: { color: C.bg },

  confirmBox: { padding: 16 },
  confirmText: { fontSize: 13, color: C.textSecond, lineHeight: 19, marginBottom: 14 },
  confirmActions: { flexDirection: 'row', gap: 10 },
  confirmCancel: {
    flex: 1, alignItems: 'center', paddingVertical: 12, borderRadius: 10,
    borderWidth: 1, borderColor: C.goldBorder,
  },
  confirmCancelText: { fontSize: 13, fontWeight: '600', color: C.textSecond },
  confirmDanger: {
    flex: 1, alignItems: 'center', paddingVertical: 12, borderRadius: 10,
    backgroundColor: C.danger,
  },
  confirmDangerText: { fontSize: 13, fontWeight: '700', color: '#FFF8F0' },
});
