import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/client';

const STRINGS = {
  en: {
    loadError: "Couldn't load today's reading.",
    tryAgain: 'Try again',
    doneTitle: "You're all caught up!",
    chapterWord: 'Chapter', partWord: 'Part',
    title: 'How much time\ndo you have today?',
    subtitle: 'Pick what fits — you can always come back for more.',
    fullTitle: 'Full Part + Quiz',
    bestBadge: 'Best',
    fullDescPrefix: 'Shlokas, explanations & ',
    question: 'question', questions: 'questions',
    fullMeta: (min) => `~${min} min · counts toward rank`,
    quickTitle: 'Quick Read Only',
    quickDesc: 'Shlokas and explanations, skip the quiz',
    quickMeta: 'Keeps your streak · no rank score',
    skipTitle: 'Skip Today',
    skipDesc: 'Protect your streak for another day',
    skipMeta: 'Uses a streak freeze',
  },
  hi: {
    loadError: 'आज की पढ़ाई लोड नहीं हो सकी।',
    tryAgain: 'पुनः प्रयास करें',
    doneTitle: 'आप पूरी तरह अप टू डेट हैं!',
    chapterWord: 'अध्याय', partWord: 'भाग',
    title: 'आज आपके पास\nकितना समय है?',
    subtitle: 'जो आपके लिए सही हो वह चुनें — आप बाद में और पढ़ सकते हैं।',
    fullTitle: 'पूरा भाग + प्रश्नोत्तरी',
    bestBadge: 'सर्वश्रेष्ठ',
    fullDescPrefix: 'श्लोक, व्याख्याएँ और ',
    question: 'सवाल', questions: 'सवाल',
    fullMeta: (min) => `~${min} मिनट · रैंक में गिना जाएगा`,
    quickTitle: 'सिर्फ़ त्वरित पठन',
    quickDesc: 'श्लोक और व्याख्याएँ, प्रश्नोत्तरी छोड़ें',
    quickMeta: 'आपकी स्ट्रीक बनी रहेगी · रैंक स्कोर नहीं',
    skipTitle: 'आज छोड़ें',
    skipDesc: 'अपनी स्ट्रीक को एक और दिन के लिए सुरक्षित रखें',
    skipMeta: 'एक स्ट्रीक फ्रीज़ का उपयोग होगा',
  },
};

export default function TodayChoiceScreen({ userId, lang, onSelect, onBack }) {
  const t = STRINGS[lang] || STRINGS.en;
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
        <TouchableOpacity onPress={onBack} style={s.centeredBackBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color="#D4AF37" />
        </TouchableOpacity>
        <Ionicons name="cloud-offline-outline" size={40} color="rgba(212,175,55,0.4)" />
        <Text style={s.errorText}>{t.loadError}</Text>
        <TouchableOpacity onPress={load} style={s.retryBtn}>
          <Text style={s.retryText}>{t.tryAgain}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (content?.done) {
    return (
      <View style={s.centered}>
        <LinearGradient colors={['#0D0500', '#1C0900', '#2A1100']} style={StyleSheet.absoluteFillObject} />
        <TouchableOpacity onPress={onBack} style={s.centeredBackBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color="#D4AF37" />
        </TouchableOpacity>
        <View style={s.doneIconWrap}>
          <Ionicons name="checkmark-circle" size={56} color="#D4AF37" />
        </View>
        <Text style={s.doneTitle}>{t.doneTitle}</Text>
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

      <View style={s.topBar}>
        <TouchableOpacity onPress={onBack} style={s.backBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color="#D4AF37" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={s.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Chapter badge */}
        <View style={s.chapterBadge}>
          <Text style={s.chapterBadgeText}>
            {t.chapterWord} {part.chapter_number}  ·  {t.partWord} {part.part_number}
          </Text>
        </View>

        <Text style={s.title}>{t.title}</Text>
        <Text style={s.subtitle}>{t.subtitle}</Text>

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
                  <Text style={s.cardTitle}>{t.fullTitle}</Text>
                  <View style={s.bestBadge}>
                    <Text style={s.bestBadgeText}>{t.bestBadge}</Text>
                  </View>
                </View>
                <Text style={s.cardDesc}>
                  {t.fullDescPrefix}{qCount} {qCount !== 1 ? t.questions : t.question}
                </Text>
                <Text style={s.cardMeta}>
                  {t.fullMeta(part.estimated_minutes)}
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
                <Text style={s.cardTitle}>{t.quickTitle}</Text>
                <Text style={s.cardDesc}>{t.quickDesc}</Text>
                <Text style={s.cardMeta}>{t.quickMeta}</Text>
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
                <Text style={s.cardTitle}>{t.skipTitle}</Text>
                <Text style={s.cardDesc}>{t.skipDesc}</Text>
                <Text style={s.cardMeta}>{t.skipMeta}</Text>
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
  centeredBackBtn: {
    position: 'absolute', top: 56, left: 22,
    width: 38, height: 38, borderRadius: 19, backgroundColor: 'rgba(212,175,55,0.10)',
    alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)',
  },
  glow1: { position: 'absolute', width: 280, height: 280, borderRadius: 140, backgroundColor: 'rgba(212,175,55,0.05)', top: -80, right: -80 },
  topBar: { paddingHorizontal: 22, paddingTop: 56 },
  backBtn: { width: 38, height: 38, borderRadius: 19, backgroundColor: 'rgba(212,175,55,0.10)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)' },
  scroll: { paddingHorizontal: 22, paddingTop: 20, paddingBottom: 40 },

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