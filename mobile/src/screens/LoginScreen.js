import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    ActivityIndicator,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import api from '../api/client';

const C = {
    bg: '#0D0500',
    gold: '#D4AF37',
    goldLight: '#F0D060',
    goldDim: 'rgba(212,175,55,0.18)',
    goldBorder: 'rgba(212,175,55,0.28)',
    saffron: '#E8841A',
    textPrimary: '#FFF8F0',
    textSecond: '#C9A96E',
    textMuted: '#7A5C34',
    inputBg: 'rgba(255,248,240,0.06)',
    error: '#FF6B6B',
    errorBg: 'rgba(255,107,107,0.10)',
    white: '#FFFFFF',
    googleText: '#1A0800',
};

export default function LoginScreen({ onGoogleAuth }) {
    const [gLoading, setGLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        setGLoading(true);
        setError('');
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            const idToken = response.data?.idToken;
            if (!idToken) throw new Error('No ID token returned from Google.');
            const { user, needsOnboarding } = await api.googleAuth(idToken);
            onGoogleAuth(user, needsOnboarding);
        } catch (err) {
            if (err?.code !== 'SIGN_IN_CANCELLED') {
                setError(err?.message || 'Google sign-in failed. Please try again.');
            }
        } finally {
            setGLoading(false);
        }
    };

    return (
        <View style={s.root}>
            <StatusBar barStyle="light-content" backgroundColor={C.bg} />

            {/* Background gradient */}
            <LinearGradient
                colors={['#0D0500', '#1C0900', '#2E1100', '#3D1600']}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
            />

            {/* Decorative glow circles */}
            <View style={s.glow1} />
            <View style={s.glow2} />

            <ScrollView
                contentContainerStyle={s.scroll}
                showsVerticalScrollIndicator={false}
            >

                {/* ── Logo + Branding ── */}
                <View style={s.brand}>
                    <View style={s.logoRing}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={s.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={s.appName}>GITA DAILY</Text>
                    <View style={s.taglineRow}>
                        <View style={s.taglineLine} />
                        <Text style={s.tagline}>Daily Wisdom from Krishna</Text>
                        <View style={s.taglineLine} />
                    </View>
                </View>

                {/* ── Card ── */}
                <View style={s.card}>

                    {/* Error banner */}
                    {!!error && (
                        <View style={s.errorBox}>
                            <Ionicons name="alert-circle" size={15} color={C.error} />
                            <Text style={s.errorText}>{error}</Text>
                        </View>
                    )}

                    {/* Google Button */}
                    <TouchableOpacity
                        style={s.googleBtn}
                        onPress={handleGoogleLogin}
                        activeOpacity={0.88}
                        disabled={gLoading}
                    >
                        {gLoading ? (
                            <ActivityIndicator color={C.googleText} size="small" />
                        ) : (
                            <>
                                <AntDesign name="google" size={18} color="#DB4437" />
                                <Text style={s.googleBtnText}>Continue with Google</Text>
                            </>
                        )}
                    </TouchableOpacity>

                </View>

                {/* Sanskrit footer */}
                <Text style={s.footer}>ॐ  श्रीमद्भगवद्गीता</Text>

            </ScrollView>
        </View>
    );
}

const s = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: C.bg,
    },

    /* Decorative glows */
    glow1: {
        position: 'absolute',
        width: 320,
        height: 320,
        borderRadius: 160,
        backgroundColor: 'rgba(212,175,55,0.055)',
        top: -100,
        right: -100,
    },
    glow2: {
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(232,132,26,0.055)',
        bottom: 80,
        left: -80,
    },

    /* Scroll */
    scroll: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 64,
        paddingBottom: 48,
    },

    /* Brand */
    brand: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoRing: {
        width: 120,
        height: 120,
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: 'rgba(212,175,55,0.30)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18,
        backgroundColor: 'rgba(212,175,55,0.05)',
    },
    logo: {
        width: 108,
        height: 108,
        borderRadius: 26,
    },
    appName: {
        fontSize: 30,
        fontWeight: '800',
        color: C.gold,
        letterSpacing: 5,
        marginBottom: 10,
    },
    taglineRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    taglineLine: {
        width: 28,
        height: 1,
        backgroundColor: 'rgba(212,175,55,0.35)',
    },
    tagline: {
        fontSize: 11,
        color: C.textSecond,
        letterSpacing: 1.8,
        textTransform: 'uppercase',
    },

    /* Card */
    card: {
        width: '100%',
        backgroundColor: 'rgba(255,248,240,0.035)',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: C.goldBorder,
        padding: 24,
    },

    /* Google */
    googleBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF8F0',
        borderRadius: 13,
        paddingVertical: 14,
        marginBottom: 22,
        gap: 10,
        shadowColor: C.gold,
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    googleBtnText: {
        fontSize: 15,
        fontWeight: '600',
        color: C.googleText,
        letterSpacing: 0.2,
    },

    /* Error */
    errorBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: C.errorBg,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 14,
        gap: 8,
    },
    errorText: {
        fontSize: 13,
        color: C.error,
        flex: 1,
    },

    /* Footer */
    footer: {
        marginTop: 36,
        fontSize: 15,
        color: 'rgba(212,175,55,0.28)',
        letterSpacing: 3,
    },
});