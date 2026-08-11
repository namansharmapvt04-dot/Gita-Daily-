import React, { useRef, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const STRINGS = {
  en: {
    chapter: 'Chapter', part: 'Part', min: 'min',
    continueToQuiz: 'Continue to Quiz  →',
    doneReviewing: 'Done Reviewing',
    finishReading: 'Finish Reading  ✓',
  },
  hi: {
    chapter: 'अध्याय', part: 'भाग', min: 'मिनट',
    continueToQuiz: 'क्विज़ पर जाएं  →',
    doneReviewing: 'पुनरावलोकन पूर्ण',
    finishReading: 'पढ़ना पूर्ण करें  ✓',
  },
};

// content = { part, verses, questions }
// mode = 'full' | 'quick' | 'review'
// onContinue(mode, content)
export default function ReadingScreen({ content, mode, lang, onContinue }) {
  const { part, verses } = content;
  const scrollRef = useRef(null);
  const t = STRINGS[lang] || STRINGS.en;

  const btnLabel =
    mode === 'full' ? t.continueToQuiz :
      mode === 'review' ? t.doneReviewing :
        t.finishReading;

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0500" />
      <LinearGradient
        colors={['#0D0500', '#1C0900', '#2A1100']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }}
      />
      <View style={s.glow1} />

      {/* Header */}
      <View style={s.header}>
        <View style={s.chapterBadge}>
          <Text style={s.chapterBadgeText}>
            {t.chapter} {part.chapter_number}  ·  {t.part} {part.part_number}
          </Text>
        </View>
        <View style={s.timeBadge}>
          <Ionicons name="time-outline" size={12} color="#7A5C34" />
          <Text style={s.timeBadgeText}>~{part.estimated_minutes} {t.min}</Text>
        </View>
      </View>

      {/* Verses */}
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        contentContainerStyle={s.scroll}
        showsVerticalScrollIndicator={false}
      >
        {verses.map((verse, idx) => (
          <View key={verse.id} style={s.verseCard}>
            {/* Verse number */}
            <View style={s.verseNumRow}>
              <View style={s.verseNumBadge}>
                <Text style={s.verseNum}>{verse.verse_number}</Text>
              </View>
            </View>

            {/* Sanskrit */}
            <Text style={s.sanskrit}>{verse.sanskrit}</Text>

            {/* Divider */}
            <View style={s.verseDivider} />

            {/* Transliteration */}
            <Text style={s.transliteration}>{verse.transliteration}</Text>

            {/* Divider */}
            <View style={s.verseDivider} />

            {/* Explanation */}
            <Text style={s.explanation}>{verse.explanation}</Text>
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Sticky Continue Button */}
      <View style={s.stickyBottom}>
        <TouchableOpacity onPress={() => onContinue(mode, content)} activeOpacity={0.88}>
          <LinearGradient
            colors={['#D4AF37', '#B8920A', '#9A7A00']}
            style={s.continueBtn}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          >
            <Text style={s.continueBtnText}>{btnLabel}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  glow1: { position: 'absolute', width: 260, height: 260, borderRadius: 130, backgroundColor: 'rgba(212,175,55,0.04)', top: -60, right: -60 },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 56, paddingBottom: 14,
  },
  chapterBadge: { backgroundColor: 'rgba(212,175,55,0.12)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 5, borderWidth: 1, borderColor: 'rgba(212,175,55,0.28)' },
  chapterBadgeText: { fontSize: 12, fontWeight: '600', color: '#D4AF37' },
  timeBadge: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  timeBadgeText: { fontSize: 12, color: '#7A5C34' },

  scroll: { paddingHorizontal: 20, paddingTop: 8 },

  verseCard: {
    backgroundColor: 'rgba(255,248,240,0.04)', borderRadius: 18, padding: 20, marginBottom: 16,
    borderWidth: 1, borderColor: 'rgba(212,175,55,0.18)',
  },
  verseNumRow: { flexDirection: 'row', marginBottom: 14 },
  verseNumBadge: { backgroundColor: 'rgba(212,175,55,0.15)', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)' },
  verseNum: { fontSize: 11, fontWeight: '700', color: '#D4AF37', letterSpacing: 0.5 },

  sanskrit: { fontSize: 17, lineHeight: 28, color: '#FFF8F0', fontWeight: '500', marginBottom: 14 },
  verseDivider: { height: 1, backgroundColor: 'rgba(212,175,55,0.12)', marginBottom: 14 },
  transliteration: { fontSize: 13, color: '#C9A96E', fontStyle: 'italic', lineHeight: 20, marginBottom: 14 },
  explanation: { fontSize: 14, lineHeight: 22, color: '#FFF8F0' },

  stickyBottom: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    paddingHorizontal: 20, paddingBottom: 30, paddingTop: 12,
    backgroundColor: 'rgba(13,5,0,0.90)',
  },
  continueBtn: { borderRadius: 14, paddingVertical: 15, alignItems: 'center' },
  continueBtnText: { fontSize: 16, fontWeight: '700', color: '#0D0500', letterSpacing: 0.3 },
});