import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator,
  RefreshControl, ScrollView, StatusBar, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/client';

function initials(name = '') {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
}

export default function HomeScreen({ userId, initialUser, onBegin, onLogout, onBrowse }) {
  const [user, setUser] = useState(initialUser || null);
  const [ranks, setRanks] = useState([]);
  // If we already have user data from the session check, skip the loading state
  const [loading, setLoading] = useState(!initialUser);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async (forceUserFetch = false) => {
    try {
      setError(null);
      if (!forceUserFetch && user) {
        // User already cached — only fetch rank
        const rankData = await api.getMyRank(userId);
        setRanks(rankData.ranks);
      } else {
        const [userData, rankData] = await Promise.all([
          api.getUser(userId),
          api.getMyRank(userId),
        ]);
        setUser(userData);
        setRanks(rankData.ranks);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [userId]);

  useEffect(() => { load(); }, [load]);

  const onRefresh = () => { setRefreshing(true); load(true); };  // force fresh user on pull-to-refresh

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
        <Ionicons name="cloud-offline-outline" size={44} color="rgba(212,175,55,0.4)" />
        <Text style={s.errorText}>Couldn't load your dashboard.</Text>
        <TouchableOpacity onPress={load} style={s.retryBtn}>
          <Text style={s.retryText}>Try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const globalRank = ranks.find(r => r.scope === 'global' && r.metric_type === 'most_read');
  const cityRank = ranks.find(r => r.scope === 'city' && r.metric_type === 'consistency');

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
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#D4AF37" />}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Top Bar ── */}
        <View style={s.topBar}>
          <View style={s.logoMark}>
            <Image source={require('../../assets/logo.png')} style={s.logoImg} resizeMode="contain" />
          </View>
          <View style={s.topRight}>
            <View style={s.streakPill}>
              <Text style={s.streakFire}>🔥</Text>
              <Text style={s.streakCount}>{user.streak_count}</Text>
            </View>
            <View style={s.avatar}>
              <Text style={s.avatarText}>{initials(user.name)}</Text>
            </View>
          </View>
        </View>

        {/* ── Greeting ── */}
        <View style={s.greetWrap}>
          <Text style={s.greetSub}>Daily Wisdom from Krishna</Text>
          <Text style={s.greetName}>Jai Shri Krishna, {user.name.split(' ')[0]} 🙏</Text>
        </View>

        {/* ── Today's Reading Card ── */}
        <TouchableOpacity onPress={onBegin} activeOpacity={0.88}>
          <LinearGradient
            colors={['#2E1800', '#3D2000', '#2E1800']}
            style={s.todayCard}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          >
            <View style={s.todayCardInner}>
              <View style={s.todayBadge}>
                <Text style={s.todayBadgeText}>TODAY</Text>
              </View>
              <Text style={s.todayTitle}>Ready when you are</Text>
              <Text style={s.todaySub}>Continue your Gita journey</Text>
              <View style={s.beginBtn}>
                <LinearGradient
                  colors={['#D4AF37', '#B8920A']}
                  style={s.beginBtnGrad}
                  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                >
                  <Text style={s.beginBtnText}>Begin Reading</Text>
                  <Ionicons name="arrow-forward" size={16} color="#0D0500" style={{ marginLeft: 6 }} />
                </LinearGradient>
              </View>
            </View>
            <Text style={s.todayOm}>ॐ</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* ── Stats Row ── */}
        <View style={s.statsRow}>
          <View style={s.statCard}>
            <View style={s.statIconWrap}>
              <Ionicons name="trophy-outline" size={18} color="#D4AF37" />
            </View>
            <Text style={s.statValue}>{globalRank ? `#${globalRank.rank}` : '—'}</Text>
            <Text style={s.statLabel}>Global rank</Text>
          </View>

          <View style={s.statCard}>
            <View style={s.statIconWrap}>
              <Ionicons name="location-outline" size={18} color="#D4AF37" />
            </View>
            <Text style={s.statValue}>{cityRank ? `#${cityRank.rank}` : '—'}</Text>
            <Text style={s.statLabel}>{user.main_city || 'City'} rank</Text>
          </View>

          <View style={s.statCard}>
            <View style={s.statIconWrap}>
              <Ionicons name="star-outline" size={18} color="#D4AF37" />
            </View>
            <Text style={s.statValue}>{user.total_score}</Text>
            <Text style={s.statLabel}>Points</Text>
          </View>
        </View>

        {/* ── Browse Button ── */}
        {onBrowse && (
          <TouchableOpacity onPress={onBrowse} style={s.browseBtn} activeOpacity={0.85}>
            <Ionicons name="book-outline" size={18} color="#D4AF37" />
            <Text style={s.browseBtnText}>Browse Chapters &amp; Past Readings</Text>
            <Ionicons name="chevron-forward" size={16} color="rgba(212,175,55,0.5)" />
          </TouchableOpacity>
        )}

        {/* ── Sanskrit quote ── */}
        <View style={s.quoteCard}>
          <Text style={s.quoteText}>
            "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
          </Text>
          <Text style={s.quoteAttrib}>— Bhagavad Gita 2.47</Text>
        </View>

        {/* ── Logout ── */}
        {onLogout && (
          <TouchableOpacity onPress={onLogout} style={s.logoutBtn}>
            <Ionicons name="log-out-outline" size={14} color="rgba(212,175,55,0.35)" />
            <Text style={s.logoutText}>Sign out</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  glow1: { position: 'absolute', width: 300, height: 300, borderRadius: 150, backgroundColor: 'rgba(212,175,55,0.05)', top: -60, right: -80 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0D0500' },
  scroll: { paddingHorizontal: 20, paddingTop: 56, paddingBottom: 40 },

  // Top bar
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 },
  logoMark: { width: 38, height: 38, borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)' },
  logoImg: { width: 38, height: 38 },
  topRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  streakPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(212,175,55,0.12)', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: 'rgba(212,175,55,0.25)', gap: 4 },
  streakFire: { fontSize: 14 },
  streakCount: { fontSize: 14, fontWeight: '700', color: '#D4AF37' },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(212,175,55,0.20)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(212,175,55,0.35)' },
  avatarText: { fontSize: 13, fontWeight: '700', color: '#D4AF37' },

  // Greeting
  greetWrap: { marginBottom: 20 },
  greetSub: { fontSize: 12, color: '#7A5C34', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 4 },
  greetName: { fontSize: 22, fontWeight: '700', color: '#FFF8F0' },

  // Today card
  todayCard: { borderRadius: 20, padding: 22, marginBottom: 16, borderWidth: 1, borderColor: 'rgba(212,175,55,0.22)', overflow: 'hidden', position: 'relative' },
  todayCardInner: { zIndex: 1 },
  todayBadge: { alignSelf: 'flex-start', backgroundColor: 'rgba(212,175,55,0.15)', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3, borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)', marginBottom: 12 },
  todayBadgeText: { fontSize: 10, fontWeight: '700', color: '#D4AF37', letterSpacing: 1.5 },
  todayTitle: { fontSize: 20, fontWeight: '700', color: '#FFF8F0', marginBottom: 4 },
  todaySub: { fontSize: 13, color: '#C9A96E', marginBottom: 18 },
  beginBtn: { alignSelf: 'flex-start' },
  beginBtnGrad: { flexDirection: 'row', alignItems: 'center', borderRadius: 12, paddingHorizontal: 20, paddingVertical: 12 },
  beginBtnText: { fontSize: 15, fontWeight: '700', color: '#0D0500' },
  todayOm: { position: 'absolute', right: 16, top: 12, fontSize: 64, color: 'rgba(212,175,55,0.08)', fontWeight: '700' },

  // Stats
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  statCard: { flex: 1, backgroundColor: 'rgba(255,248,240,0.04)', borderRadius: 16, padding: 14, borderWidth: 1, borderColor: 'rgba(212,175,55,0.18)', alignItems: 'center' },
  statIconWrap: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(212,175,55,0.12)', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  statValue: { fontSize: 18, fontWeight: '700', color: '#FFF8F0', marginBottom: 2 },
  statLabel: { fontSize: 11, color: '#7A5C34', textAlign: 'center' },

  // Browse
  browseBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,248,240,0.04)', borderRadius: 14, padding: 16, borderWidth: 1, borderColor: 'rgba(212,175,55,0.18)', marginBottom: 16, gap: 10 },
  browseBtnText: { flex: 1, fontSize: 14, color: '#C9A96E', fontWeight: '500' },

  // Quote
  quoteCard: { backgroundColor: 'rgba(212,175,55,0.06)', borderRadius: 14, padding: 16, borderWidth: 1, borderColor: 'rgba(212,175,55,0.15)', marginBottom: 24, alignItems: 'center' },
  quoteText: { fontSize: 14, color: '#C9A96E', textAlign: 'center', lineHeight: 22, marginBottom: 8 },
  quoteAttrib: { fontSize: 11, color: '#7A5C34' },

  // Logout
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  logoutText: { fontSize: 12, color: 'rgba(212,175,55,0.35)' },

  // Error
  errorText: { color: '#C9A96E', fontSize: 15, marginTop: 14, marginBottom: 16 },
  retryBtn: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(212,175,55,0.30)' },
  retryText: { color: '#D4AF37', fontSize: 14, fontWeight: '600' },
});