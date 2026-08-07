import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    ActivityIndicator,
    Dimensions,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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

export default function LoginScreen({ onLogin, onSignup, onForgotPassword }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [gLoading, setGLoading] = useState(false);
    const [error, setError] = useState('');

    /* ── Auth handlers (wire up your API / Google SDK here) ── */
    const handleEmailLogin = async () => {
        if (!email.trim() || !password) {
            setError('Please enter your email and password.');
            return;
        }
        setError('');
        setLoading(true);
        try {
            // TODO: await api.post('/auth/login', { email, password });
            // onLogin(userId);
        } catch (err) {
            setError(err?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setGLoading(true);
        setError('');
        try {
            // TODO: Google Sign-In via expo-auth-session or @react-native-google-signin
            // onLogin(userId);
        } catch (err) {
            setError('Google sign-in failed. Please try again.');
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

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={s.scroll}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >

                    {/* ── Logo + Branding ── */}
                    <View style={s.brand}>
                        <View style={s.logoRing}>
                            <Image
                                // Adjust path to match your assets folder
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

                        {/* Divider */}
                        <View style={s.divRow}>
                            <View style={s.divLine} />
                            <Text style={s.divText}>or sign in with email</Text>
                            <View style={s.divLine} />
                        </View>

                        {/* Error banner */}
                        {!!error && (
                            <View style={s.errorBox}>
                                <Ionicons name="alert-circle" size={15} color={C.error} />
                                <Text style={s.errorText}>{error}</Text>
                            </View>
                        )}

                        {/* Email */}
                        <View style={s.inputWrap}>
                            <Ionicons name="mail-outline" size={17} color={C.textMuted} style={s.inputIcon} />
                            <TextInput
                                style={s.input}
                                placeholder="Email address"
                                placeholderTextColor={C.textMuted}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                        </View>

                        {/* Password */}
                        <View style={s.inputWrap}>
                            <Ionicons name="lock-closed-outline" size={17} color={C.textMuted} style={s.inputIcon} />
                            <TextInput
                                style={[s.input, { flex: 1 }]}
                                placeholder="Password"
                                placeholderTextColor={C.textMuted}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPass}
                                autoCapitalize="none"
                                returnKeyType="done"
                                onSubmitEditing={handleEmailLogin}
                            />
                            <TouchableOpacity onPress={() => setShowPass(v => !v)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                                <Ionicons
                                    name={showPass ? 'eye-outline' : 'eye-off-outline'}
                                    size={17}
                                    color={C.textMuted}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Forgot */}
                        <TouchableOpacity
                            style={s.forgotWrap}
                            onPress={() => onForgotPassword && onForgotPassword()}
                        >
                            <Text style={s.forgotText}>Forgot password?</Text>
                        </TouchableOpacity>

                        {/* Sign In button */}
                        <TouchableOpacity onPress={handleEmailLogin} activeOpacity={0.85} disabled={loading}>
                            <LinearGradient
                                colors={['#D4AF37', '#B8920A', '#9A7A00']}
                                style={s.loginBtn}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                {loading ? (
                                    <ActivityIndicator color={C.bg} size="small" />
                                ) : (
                                    <Text style={s.loginBtnText}>Sign In</Text>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>

                        {/* Sign Up link */}
                        <View style={s.signupRow}>
                            <Text style={s.signupPrompt}>New to Gita Daily?  </Text>
                            <TouchableOpacity onPress={() => onSignup && onSignup()}>
                                <Text style={s.signupLink}>Create account</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* Sanskrit footer */}
                    <Text style={s.footer}>ॐ  श्रीमद्भगवद्गीता</Text>

                </ScrollView>
            </KeyboardAvoidingView>
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

    /* Divider */
    divRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 8,
    },
    divLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(212,175,55,0.18)',
    },
    divText: {
        fontSize: 11,
        color: C.textMuted,
        letterSpacing: 0.3,
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

    /* Inputs */
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: C.inputBg,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: C.goldBorder,
        paddingHorizontal: 14,
        paddingVertical: 14,
        marginBottom: 14,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: C.textPrimary,
        padding: 0,
        margin: 0,
    },

    /* Forgot */
    forgotWrap: {
        alignSelf: 'flex-end',
        marginTop: -6,
        marginBottom: 20,
    },
    forgotText: {
        fontSize: 13,
        color: C.gold,
    },

    /* Login button */
    loginBtn: {
        borderRadius: 13,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: C.gold,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    loginBtnText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0D0500',
        letterSpacing: 1.5,
    },

    /* Sign up */
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupPrompt: {
        fontSize: 14,
        color: C.textMuted,
    },
    signupLink: {
        fontSize: 14,
        fontWeight: '600',
        color: C.gold,
    },

    /* Footer */
    footer: {
        marginTop: 36,
        fontSize: 15,
        color: 'rgba(212,175,55,0.28)',
        letterSpacing: 3,
    },
});