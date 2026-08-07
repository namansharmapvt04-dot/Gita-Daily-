import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/client';

// onDone(result) — result has streak_count, points_earned, quiz_score
export default function QuizScreen({ userId, content, onDone }) {
  const { part, questions } = content;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const progress = (index + (selected !== null ? 1 : 0)) / questions.length;

  const selectOption = (i) => {
    if (selected !== null) return;
    setSelected(i);
  };

  const next = async () => {
    const newAnswers = [...answers, { questionId: question.id, selectedIndex: selected }];
    setAnswers(newAnswers);
    setSelected(null);

    if (!isLast) {
      setIndex(index + 1);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const result = await api.submitReading({
        userId,
        partId: part.id,
        mode: 'full',
        answers: newAnswers,
      });
      onDone(result);
    } catch (e) {
      setSubmitError(e.message);
      setSubmitting(false);
    }
  };

  if (submitting) {
    return (
      <View style={s.centered}>
        <LinearGradient colors={['#0D0500', '#1C0900']} style={StyleSheet.absoluteFillObject} />
        <ActivityIndicator color="#D4AF37" size="large" />
        <Text style={s.submittingText}>Saving your results…</Text>
      </View>
    );
  }

  const isCorrect = selected !== null && question.options[selected]?.is_correct;

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
          <Text style={s.chapterBadgeText}>Quiz  ·  Chapter {part.chapter_number}</Text>
        </View>
        <Text style={s.progressLabel}>{index + 1} / {questions.length}</Text>
      </View>

      {/* Progress bar */}
      <View style={s.progressBarBg}>
        <LinearGradient
          colors={['#D4AF37', '#B8920A']}
          style={[s.progressBarFill, { width: `${progress * 100}%` }]}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        />
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        {/* Question */}
        <Text style={s.question}>{question.question_text}</Text>

        {/* Options */}
        <View style={s.options}>
          {question.options.map((opt, i) => {
            let borderColor = 'rgba(212,175,55,0.18)';
            let bg = 'rgba(255,248,240,0.04)';
            let textColor = '#FFF8F0';
            let iconName = null;

            if (selected !== null) {
              if (opt.is_correct) {
                borderColor = 'rgba(82,196,26,0.6)';
                bg = 'rgba(82,196,26,0.10)';
                textColor = '#52C41A';
                iconName = 'checkmark-circle';
              } else if (i === selected) {
                borderColor = 'rgba(255,107,107,0.6)';
                bg = 'rgba(255,107,107,0.10)';
                textColor = '#FF6B6B';
                iconName = 'close-circle';
              } else {
                textColor = '#7A5C34';
              }
            }

            return (
              <TouchableOpacity
                key={i}
                onPress={() => selectOption(i)}
                style={[s.option, { borderColor, backgroundColor: bg }]}
                activeOpacity={0.8}
                disabled={selected !== null}
              >
                <View style={s.optionLetter}>
                  <Text style={[s.optionLetterText, selected !== null && i !== selected && !opt.is_correct && { color: '#7A5C34' }]}>
                    {['A', 'B', 'C', 'D'][i]}
                  </Text>
                </View>
                <Text style={[s.optionText, { color: textColor }]}>{opt.text}</Text>
                {iconName && (
                  <Ionicons
                    name={iconName}
                    size={18}
                    color={opt.is_correct ? '#52C41A' : '#FF6B6B'}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback */}
        {selected !== null && (
          <View style={[s.feedback, isCorrect ? s.feedbackCorrect : s.feedbackWrong]}>
            <View style={s.feedbackHeader}>
              <Ionicons
                name={isCorrect ? 'checkmark-circle' : 'information-circle'}
                size={18}
                color={isCorrect ? '#52C41A' : '#FF6B6B'}
              />
              <Text style={[s.feedbackTitle, { color: isCorrect ? '#52C41A' : '#FF6B6B' }]}>
                {isCorrect ? 'Correct!' : 'Not quite'}
              </Text>
            </View>
            <Text style={s.feedbackText}>{question.explanation}</Text>
          </View>
        )}

        {submitError && (
          <View style={s.errorBox}>
            <Ionicons name="alert-circle" size={15} color="#FF6B6B" />
            <Text style={s.errorText}>{submitError}</Text>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Next / Finish button */}
      {selected !== null && (
        <View style={s.stickyBottom}>
          <TouchableOpacity onPress={next} activeOpacity={0.88}>
            <LinearGradient
              colors={['#D4AF37', '#B8920A', '#9A7A00']}
              style={s.nextBtn}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            >
              <Text style={s.nextBtnText}>{isLast ? 'Finish  ✓' : 'Next Question  →'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  glow1: { position: 'absolute', width: 260, height: 260, borderRadius: 130, backgroundColor: 'rgba(212,175,55,0.04)', top: -60, right: -60 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0D0500', gap: 14 },
  submittingText: { color: '#C9A96E', fontSize: 14 },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 56, paddingBottom: 12,
  },
  chapterBadge: { backgroundColor: 'rgba(212,175,55,0.12)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 5, borderWidth: 1, borderColor: 'rgba(212,175,55,0.28)' },
  chapterBadgeText: { fontSize: 12, fontWeight: '600', color: '#D4AF37' },
  progressLabel: { fontSize: 13, color: '#7A5C34', fontWeight: '600' },

  progressBarBg: { height: 4, backgroundColor: 'rgba(212,175,55,0.12)', marginHorizontal: 20, borderRadius: 4, marginBottom: 20, overflow: 'hidden' },
  progressBarFill: { height: 4, borderRadius: 4 },

  scroll: { paddingHorizontal: 20 },
  question: { fontSize: 17, fontWeight: '600', color: '#FFF8F0', lineHeight: 26, marginBottom: 22 },

  options: { gap: 10, marginBottom: 18 },
  option: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    borderRadius: 14, borderWidth: 1, padding: 16,
  },
  optionLetter: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: 'rgba(212,175,55,0.12)', alignItems: 'center', justifyContent: 'center',
  },
  optionLetterText: { fontSize: 12, fontWeight: '700', color: '#D4AF37' },
  optionText: { flex: 1, fontSize: 14, lineHeight: 20 },

  feedback: { borderRadius: 14, padding: 14, marginBottom: 8, borderWidth: 1 },
  feedbackCorrect: { backgroundColor: 'rgba(82,196,26,0.08)', borderColor: 'rgba(82,196,26,0.30)' },
  feedbackWrong: { backgroundColor: 'rgba(255,107,107,0.08)', borderColor: 'rgba(255,107,107,0.30)' },
  feedbackHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  feedbackTitle: { fontSize: 14, fontWeight: '700' },
  feedbackText: { fontSize: 13, color: '#C9A96E', lineHeight: 20 },

  errorBox: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,107,107,0.10)', borderRadius: 10, padding: 12 },
  errorText: { flex: 1, fontSize: 13, color: '#FF6B6B' },

  stickyBottom: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    paddingHorizontal: 20, paddingBottom: 30, paddingTop: 12,
    backgroundColor: 'rgba(13,5,0,0.90)',
  },
  nextBtn: { borderRadius: 14, paddingVertical: 15, alignItems: 'center' },
  nextBtnText: { fontSize: 16, fontWeight: '700', color: '#0D0500', letterSpacing: 0.3 },
});