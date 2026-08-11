import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/client';

const STRINGS = {
  en: {
    partComplete: 'Part Complete!',
    correct: 'correct',
    dayStreak: 'day streak',
    pointsEarned: 'points earned',
    globalRank: 'Global Rank',
    cityRank: 'City Rank',
    keepGoing: 'Keep going?',
    nextPartReady: 'The next part is ready whenever you are.',
    continueToNextPart: 'Continue to next part',
    enoughForToday: "That's enough for today",
    streakFootnote: 'Your streak is already counted for today.',
  },
  hi: {
    partComplete: 'भाग पूर्ण हुआ!',
    correct: 'सही',
    dayStreak: 'दिन की लगातार पढ़ाई',
    pointsEarned: 'अंक अर्जित किए',
    globalRank: 'वैश्विक रैंक',
    cityRank: 'शहर रैंक',
    keepGoing: 'आगे बढ़ें?',
    nextPartReady: 'अगला भाग तैयार है, जब भी आप चाहें।',
    continueToNextPart: 'अगले भाग पर जाएं',
    enoughForToday: 'आज के लिए इतना काफी है',
    streakFootnote: 'आज के लिए आपकी लगातार पढ़ाई गिनी जा चुकी है।',
  },
};

// result = { streak_count, points_earned, quiz_score }
export default function CompletionScreen({ userId, result, lang, onContinue, onStop }) {
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const t = STRINGS[lang] || STRINGS.en;

  useEffect(() => {
    api.getMyRank(userId)
      .then((r) => setRanks(r.ranks))
      .finally(() => setLoading(false));
  }, [userId]);

  const globalRank = ranks.find(r => r.scope === 'global' && r.metric_type === 'most_read');
  const cityRank = ranks.find(r => r.scope === 'city' && r.metric_type === 'consistency');

  const quizPct = result.quiz_score != null ? Math.round(result.quiz_score * 100) : null;

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0500" />
      <LinearGradient
        colors={['#0D0500', '#1C0900', '#2A1100']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }}
      />
      <View style={s.glow1} />
      <View style={s.glow2} />

      <View style={s.container}>
        {/* Top: centered content */}
        <View style={s.topSection}>
          <View style={s.checkWrap}>
            <LinearGradient colors={['rgba(212,175,55,0.18)', 'rgba(212,175,55,0.06)']} style={s.checkCircle}>
              <Ionicons name="checkmark" size={48} color="#D4AF37" />
            </LinearGradient>
          </View>

          <Text style={s.title}>{t.partComplete}</Text>
          <Text style={s.subtitle}>
            {quizPct != null ? `${quizPct}% ${t.correct} · ` : ''}
            🔥 {result.streak_count} {t.dayStreak}
          </Text>

          {result.points_earned > 0 && (
            <View style={s.pointsBadge}>
              <Ionicons name="star" size={14} color="#D4AF37" />
              <Text style={s.pointsText}>+{result.points_earned} {t.pointsEarned}</Text>
            </View>
          )}
        </View>

        {/* Rank cards — full width */}
        <View style={s.statsRow}>
          <View style={s.statCard}>
            <View style={s.statIconWrap}>
              <Ionicons name="trophy-outline" size={16} color="#D4AF37" />
            </View>
            <Text style={s.statLabel}>{t.globalRank}</Text>
            {loading
              ? <ActivityIndicator color="#D4AF37" size="small" />
              : <Text style={s.statValue}>{globalRank ? `#${globalRank.rank}` : '—'}</Text>
            }
          </View>
          <View style={s.statCard}>
            <View style={s.statIconWrap}>
              <Ionicons name="location-outline" size={16} color="#D4AF37" />
            </View>
            <Text style={s.statLabel}>{t.cityRank}</Text>
            {loading
              ? <ActivityIndicator color="#D4AF37" size="small" />
              : <Text style={s.statValue}>{cityRank ? `#${cityRank.rank}` : '—'}</Text>
            }
          </View>
        </View>

        {/* Divider */}
        <View style={s.divider}>
          <View style={s.dividerLine} />
          <Text style={s.dividerText}>ॐ</Text>
          <View style={s.dividerLine} />
        </View>

        {/* Bottom: full-width buttons */}
        <View style={s.bottomSection}>
          <Text style={s.continueTitle}>{t.keepGoing}</Text>
          <Text style={s.continueSub}>{t.nextPartReady}</Text>

          <TouchableOpacity onPress={onContinue} activeOpacity={0.88} style={s.continueBtnWrap}>
            <LinearGradient
              colors={['#D4AF37', '#B8920A', '#9A7A00']}
              style={s.continueBtn}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            >
              <Text style={s.continueBtnText}>{t.continueToNextPart}</Text>
              <Ionicons name="arrow-forward" size={16} color="#0D0500" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={onStop} style={s.stopBtn} activeOpacity={0.8}>
            <Text style={s.stopBtnText}>{t.enoughForToday}</Text>
          </TouchableOpacity>

          <Text style={s.footnote}>{t.streakFootnote}</Text>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  glow1: { position: 'absolute', width: 300, height: 300, borderRadius: 150, backgroundColor: 'rgba(212,175,55,0.06)', top: -100, right: -100 },
  glow2: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: 'rgba(232,132,26,0.05)', bottom: 60, left: -80 },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 64, paddingBottom: 30 },

  // Top centered block
  topSection: { alignItems: 'center', marginBottom: 24 },
  checkWrap: { marginBottom: 20 },
  checkCircle: { width: 96, height: 96, borderRadius: 48, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)' },
  title: { fontSize: 26, fontWeight: '800', color: '#FFF8F0', marginBottom: 6, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#C9A96E', marginBottom: 14, textAlign: 'center' },
  pointsBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(212,175,55,0.12)', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6, borderWidth: 1, borderColor: 'rgba(212,175,55,0.28)' },
  pointsText: { fontSize: 13, fontWeight: '600', color: '#D4AF37' },

  // Rank row — naturally full width
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: 'rgba(255,248,240,0.04)', borderRadius: 16, padding: 14, borderWidth: 1, borderColor: 'rgba(212,175,55,0.18)', alignItems: 'center' },
  statIconWrap: { width: 34, height: 34, borderRadius: 17, backgroundColor: 'rgba(212,175,55,0.12)', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  statLabel: { fontSize: 11, color: '#7A5C34', marginBottom: 4 },
  statValue: { fontSize: 20, fontWeight: '700', color: '#D4AF37' },

  divider: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 },
  dividerLine: { flex: 1, height: 1, backgroundColor: 'rgba(212,175,55,0.15)' },
  dividerText: { fontSize: 16, color: 'rgba(212,175,55,0.35)' },

  // Bottom full-width buttons
  bottomSection: {},
  continueTitle: { fontSize: 16, fontWeight: '700', color: '#FFF8F0', marginBottom: 4 },
  continueSub: { fontSize: 13, color: '#C9A96E', marginBottom: 16 },
  continueBtnWrap: { marginBottom: 10 },
  continueBtn: { borderRadius: 14, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  continueBtnText: { fontSize: 16, fontWeight: '700', color: '#0D0500', letterSpacing: 0.3 },
  stopBtn: { borderRadius: 14, paddingVertical: 15, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)', backgroundColor: 'rgba(255,248,240,0.04)', marginBottom: 16 },
  stopBtnText: { fontSize: 15, fontWeight: '600', color: '#C9A96E' },
  footnote: { fontSize: 11, color: '#7A5C34', textAlign: 'center' },
});