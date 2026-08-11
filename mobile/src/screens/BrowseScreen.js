import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator,
  SectionList, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/client';

const STRINGS = {
  en: {
    journeyTitle: 'Your Journey',
    loadError: "Couldn't load your progress.",
    tryAgain: 'Try again',
    chapterWord: 'Chapter',
    partWord: 'Part',
    completed: 'Completed · tap to re-read',
    ready: (min) => `Ready · ~${min} min`,
    locked: 'Locked',
  },
  hi: {
    journeyTitle: 'आपकी यात्रा',
    loadError: 'आपकी प्रगति लोड नहीं हो सकी।',
    tryAgain: 'पुनः प्रयास करें',
    chapterWord: 'अध्याय',
    partWord: 'भाग',
    completed: 'पूर्ण · फिर से पढ़ने के लिए टैप करें',
    ready: (min) => `तैयार · ~${min} मिनट`,
    locked: 'लॉक्ड',
  },
};

export default function BrowseScreen({ userId, lang, onOpenPart, onBack }) {
  const t = STRINGS[lang] || STRINGS.en;
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = () => {
    setLoading(true);
    setError(null);
    api.getProgress(userId)
      .then((data) => setParts(data.parts))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [userId]);

  if (loading) {
    return (
      <View style={s.centered}>
        <LinearGradient colors={['#0D0500', '#1C0900']} style={StyleSheet.absoluteFillObject} />
        <ActivityIndicator color="#D4AF37" size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={s.centered}>
        <LinearGradient colors={['#0D0500', '#1C0900']} style={StyleSheet.absoluteFillObject} />
        <Ionicons name="cloud-offline-outline" size={40} color="rgba(212,175,55,0.4)" />
        <Text style={s.errorText}>{t.loadError}</Text>
        <TouchableOpacity onPress={load} style={s.retryBtn}>
          <Text style={s.retryText}>{t.tryAgain}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const chapterMap = {};
  parts.forEach((p) => {
    const key = p.chapter_number;
    if (!chapterMap[key]) {
      chapterMap[key] = { title: `${t.chapterWord} ${p.chapter_number}`, subtitle: p.chapter_title, data: [] };
    }
    chapterMap[key].data.push(p);
  });
  const sections = Object.values(chapterMap);

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0500" />
      <LinearGradient
        colors={['#0D0500', '#1C0900', '#2A1100']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }}
      />

      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity onPress={onBack} style={s.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#D4AF37" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={s.headerTitle}>{t.journeyTitle}</Text>
        </View>
        <View style={{ width: 38 }} />
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
        renderSectionHeader={({ section }) => (
          <View style={s.sectionHeader}>
            <View style={s.sectionDot} />
            <View>
              <Text style={s.sectionTitle}>{section.title}</Text>
              <Text style={s.sectionSubtitle}>{section.subtitle}</Text>
            </View>
          </View>
        )}
        renderItem={({ item }) => {
          const isDone = item.completed;
          const isNext = !item.locked && !item.completed;
          const isLocked = item.locked;

          return (
            <TouchableOpacity
              disabled={isLocked}
              style={[s.row, isDone && s.rowDone, isNext && s.rowNext, isLocked && s.rowLocked]}
              onPress={() => onOpenPart(item, isDone ? 'review' : 'next')}
              activeOpacity={0.8}
            >
              <View style={[s.iconCircle, isDone && s.iconDone, isNext && s.iconNext]}>
                {isDone
                  ? <Ionicons name="checkmark" size={14} color="#0D0500" />
                  : isLocked
                    ? <Ionicons name="lock-closed" size={12} color="rgba(212,175,55,0.35)" />
                    : <Ionicons name="play" size={12} color="#0D0500" />
                }
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[s.rowTitle, isLocked && s.rowTitleMuted]}>
                  {t.partWord} {item.part_number}
                </Text>
                <Text style={s.rowMeta}>
                  {isDone
                    ? t.completed
                    : isNext
                      ? t.ready(item.estimated_minutes)
                      : t.locked}
                </Text>
              </View>
              {isDone && (
                <Ionicons name="chevron-forward" size={14} color="rgba(212,175,55,0.4)" />
              )}
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 4 }} />}
      />
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0D0500' },
  errorText: { color: '#C9A96E', fontSize: 15, marginTop: 14, marginBottom: 12 },
  retryBtn: { paddingHorizontal: 22, paddingVertical: 9, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)' },
  retryText: { color: '#D4AF37', fontSize: 14 },

  header: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16,
    paddingTop: 56, paddingBottom: 16,
  },
  backBtn: { width: 38, height: 38, borderRadius: 19, backgroundColor: 'rgba(212,175,55,0.10)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)' },
  headerTitle: { fontSize: 16, fontWeight: '700', color: '#FFF8F0' },

  sectionHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingTop: 20, paddingBottom: 10,
  },
  sectionDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#D4AF37' },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: 1 },
  sectionSubtitle: { fontSize: 11, color: '#7A5C34', marginTop: 1 },

  row: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: 'rgba(255,248,240,0.04)', borderRadius: 14, padding: 14,
    borderWidth: 1, borderColor: 'rgba(212,175,55,0.14)',
  },
  rowDone: { borderColor: 'rgba(82,196,26,0.25)', backgroundColor: 'rgba(82,196,26,0.05)' },
  rowNext: { borderColor: 'rgba(212,175,55,0.40)', backgroundColor: 'rgba(212,175,55,0.07)' },
  rowLocked: { opacity: 0.4 },

  iconCircle: {
    width: 30, height: 30, borderRadius: 15,
    backgroundColor: 'rgba(212,175,55,0.15)', alignItems: 'center', justifyContent: 'center',
  },
  iconDone: { backgroundColor: '#52C41A' },
  iconNext: { backgroundColor: '#D4AF37' },

  rowTitle: { fontSize: 14, fontWeight: '600', color: '#FFF8F0' },
  rowTitleMuted: { color: '#7A5C34' },
  rowMeta: { fontSize: 12, color: '#7A5C34', marginTop: 2 },
});