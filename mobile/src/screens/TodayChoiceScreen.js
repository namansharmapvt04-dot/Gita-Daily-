import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/client';

export default function TodayChoiceScreen({ userId, onSelect }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = () => {
    setLoading(true);
    setError(null);
    api.getTodayContent(userId)
      .then(setContent)
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
        <Text style={s.errorText}>Couldn't load today's reading.</Text>
        <TouchableOpacity onPress={load} style={s.retryBtn}>
          <Text style={s.retryText}>Try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (content?.done) {
    return (
      <View style={s.centered}>
        <LinearGradient colors={['#0D0500', '#1C0900', '#2A1100']} style={StyleSheet.absoluteFillObject} />
        <View style={s.doneIconWrap}>
          <Ionicons name="checkmark-circle" size={56} color="#D4AF37" />
        </View>
        <Text style={s.doneTitle}>You're all caught up!</Text>
        <Text style={s.doneSub}>{content.message}</Text>
      </View>
    );
  }

  const { part } = content;
  const qCount = content.questions?.length ?? 0;

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0500" />
      <LinearGradient
        colors={['#0D0500', '#1C0900', '#2A1100']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }}
      />
      <View style={s.glow1} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={s.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Chapter badge */}
        <View style={s.chapterBadge}>
          <Text style={s.chapterBadgeText}>
            Chapter {part.chapter_number}  ·  Part {part.part_number}
          </Text>
        </View>

        <Text style={s.title}>How much time{'\n'}do you have today?</Text>
        <Text style={s.subtitle}>Pick what fits — you can always come back for more.</Text>

        {/* Full Part + Quiz */}
        <TouchableOpacity
          onPress={() => onSelect('full', content)}
          activeOpacity={0.85}
          style={s.cardWrap}
        >
          <LinearGradient
            colors={['#2E1800', '#3D2200']}
            style={[s.card, s.cardHighlight]}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          >
            <View style={s.cardRow}>
              <View style={[s.iconCircle, s.iconCircleGold]}>
                <Ionicons name="book" size={18} color="#0D0500" />
              </View>
              <View style={s.cardText}>
                <View style={s.cardTitleRow}>
                  <Text style={s.cardTitle}>Full Part + Quiz</Text>
                  <View style={s.bestBadge}>
                    <Text style={s.bestBadgeText}>Best</Text>
                  </View>
                </View>
                <Text style={s.cardDesc}>
                  Shlokas, explanations &amp; {qCount} question{qCount !== 1 ? 's' : ''}
                </Text>
                <Text style={s.cardMeta}>
                  ~{part.estimated_minutes} min · counts toward rank
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Quick Read */}
        <TouchableOpacity
          onPress={() => onSelect('quick', content)}
          activeOpacity={0.85}
          style={s.cardWrap}
        >
          <View style={s.card}>
            <View style={s.cardRow}>
              <View style={s.iconCircle}>
                <Ionicons name="flash-outline" size={18} color="#D4AF37" />
              </View>
              <View style={s.cardText}>
                <Text style={s.cardTitle}>Quick Read Only</Text>
                <Text style={s.cardDesc}>Shlokas and explanations, skip the quiz</Text>
                <Text style={s.cardMeta}>Keeps your streak · no rank score</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Skip */}
        <TouchableOpacity
          onPress={() => onSelect('skip', content)}
          activeOpacity={0.85}
          style={s.cardWrap}
        >
          <View style={s.card}>
            <View style={s.cardRow}>
              <View style={s.iconCircle}>
                <Ionicons name="shield-checkmark-outline" size={18} color="#D4AF37" />
              </View>
              <View style={s.cardText}>
                <Text style={s.cardTitle}>Skip Today</Text>
                <Text style={s.cardDesc}>Protect your streak for another day</Text>
                <Text style={s.cardMeta}>Uses a streak freeze</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={s.footnote}>ॐ  श्रीमद्भगवद्गीता</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0D0500', padding: 24 },
  glow1: { position: 'absolute', width: 280, height: 280, borderRadius: 140, backgroundColor: 'rgba(212,175,55,0.05)', top: -80, right: -80 },
  scroll: { paddingHorizontal: 22, paddingTop: 64, paddingBottom: 40 },

  chapterBadge: { alignSelf: 'flex-start', backgroundColor: 'rgba(212,175,55,0.12)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 5, borderWidth: 1, borderColor: 'rgba(212,175,55,0.28)', marginBottom: 16 },
  chapterBadgeText: { fontSize: 12, fontWeight: '600', color: '#D4AF37', letterSpacing: 0.5 },

  title: { fontSize: 24, fontWeight: '800', color: '#FFF8F0', lineHeight: 32, marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#C9A96E', marginBottom: 24 },

  cardWrap: { marginBottom: 12 },
  card: {
    borderRadius: 18, padding: 18,
    backgroundColor: 'rgba(255,248,240,0.05)',
    borderWidth: 1, borderColor: 'rgba(212,175,55,0.20)',
  },
  cardHighlight: { borderWidth: 1, borderColor: 'rgba(212,175,55,0.45)' },

  cardRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
  iconCircle: {
    width: 40, height: 40, borderRadius: 20, marginTop: 2,
    backgroundColor: 'rgba(212,175,55,0.12)', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  iconCircleGold: { backgroundColor: '#D4AF37' },

  cardText: { flex: 1 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#FFF8F0' },
  bestBadge: { backgroundColor: 'rgba(212,175,55,0.22)', borderRadius: 6, paddingHorizontal: 7, paddingVertical: 2 },
  bestBadgeText: { fontSize: 10, fontWeight: '700', color: '#D4AF37', letterSpacing: 0.5 },
  cardDesc: { fontSize: 13, color: '#C9A96E', marginBottom: 4 },
  cardMeta: { fontSize: 11, color: '#7A5C34' },

  // Done state
  doneIconWrap: { width: 90, height: 90, borderRadius: 45, backgroundColor: 'rgba(212,175,55,0.10)', alignItems: 'center', justifyContent: 'center', marginBottom: 18, borderWidth: 1, borderColor: 'rgba(212,175,55,0.25)' },
  doneTitle: { fontSize: 22, fontWeight: '700', color: '#FFF8F0', marginBottom: 8, textAlign: 'center' },
  doneSub: { fontSize: 14, color: '#C9A96E', textAlign: 'center' },

  errorText: { color: '#C9A96E', fontSize: 15, marginTop: 14, marginBottom: 12 },
  retryBtn: { paddingHorizontal: 22, paddingVertical: 9, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)' },
  retryText: { color: '#D4AF37', fontSize: 14 },
  footnote: { textAlign: 'center', fontSize: 13, color: 'rgba(212,175,55,0.25)', letterSpacing: 3, marginTop: 24 },
});