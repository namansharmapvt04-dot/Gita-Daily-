import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const C = {
  bg: '#0D0500',
  gold: '#D4AF37',
  goldBorder: 'rgba(212,175,55,0.28)',
  textPrimary: '#FFF8F0',
  textSecond: '#C9A96E',
  textMuted: '#7A5C34',
  inputBg: 'rgba(255,248,240,0.06)',
  error: '#FF6B6B',
  errorBg: 'rgba(255,107,107,0.10)',
};

export default function SignupScreen({ onBack, onNext }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (!name.trim()) return setError('Please enter your name.');
    if (!email.trim()) return setError('Please enter your email.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    if (password !== confirm) return setError('Passwords do not match.');
    setError('');
    // Pass credentials to App.js → OnboardingScreen
    onNext({ name: name.trim(), email: email.trim(), password });
  };

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />
      <LinearGradient
        colors={['#0D0500', '#1C0900', '#2E1100', '#3D1600']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      />
      <View style={s.glow1} />
      <View style={s.glow2} />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>

          {/* Back */}
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Ionicons name="arrow-back" size={22} color={C.gold} />
          </TouchableOpacity>

          {/* Header */}
          <View style={s.header}>
            <Text style={s.title}>Create Account</Text>
            <Text style={s.subtitle}>Join thousands on the path of wisdom</Text>
            <View style={s.divRow}>
              <View style={s.divLine} />
              <Text style={s.divText}>ॐ</Text>
              <View style={s.divLine} />
            </View>
          </View>

          {/* Card */}
          <View style={s.card}>
            {!!error && (
              <View style={s.errorBox}>
                <Ionicons name="alert-circle" size={15} color={C.error} />
                <Text style={s.errorText}>{error}</Text>
              </View>
            )}

            {/* Name */}
            <Text style={s.label}>Full Name</Text>
            <View style={s.inputWrap}>
              <Ionicons name="person-outline" size={17} color={C.textMuted} style={s.icon} />
              <TextInput
                style={s.input}
                placeholder="Your name"
                placeholderTextColor={C.textMuted}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                returnKeyType="next"
              />
            </View>

            {/* Email */}
            <Text style={s.label}>Email</Text>
            <View style={s.inputWrap}>
              <Ionicons name="mail-outline" size={17} color={C.textMuted} style={s.icon} />
              <TextInput
                style={s.input}
                placeholder="your@email.com"
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
            <Text style={s.label}>Password</Text>
            <View style={s.inputWrap}>
              <Ionicons name="lock-closed-outline" size={17} color={C.textMuted} style={s.icon} />
              <TextInput
                style={[s.input, { flex: 1 }]}
                placeholder="Min. 6 characters"
                placeholderTextColor={C.textMuted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPass}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <TouchableOpacity onPress={() => setShowPass(v => !v)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} size={17} color={C.textMuted} />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <Text style={s.label}>Confirm Password</Text>
            <View style={s.inputWrap}>
              <Ionicons name="shield-checkmark-outline" size={17} color={C.textMuted} style={s.icon} />
              <TextInput
                style={[s.input, { flex: 1 }]}
                placeholder="Re-enter password"
                placeholderTextColor={C.textMuted}
                value={confirm}
                onChangeText={setConfirm}
                secureTextEntry={!showConf}
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={handleNext}
              />
              <TouchableOpacity onPress={() => setShowConf(v => !v)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Ionicons name={showConf ? 'eye-outline' : 'eye-off-outline'} size={17} color={C.textMuted} />
              </TouchableOpacity>
            </View>

            {/* Continue Button */}
            <TouchableOpacity onPress={handleNext} activeOpacity={0.85} disabled={loading} style={{ marginTop: 8 }}>
              <LinearGradient
                colors={['#D4AF37', '#B8920A', '#9A7A00']}
                style={s.btn}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                {loading
                  ? <ActivityIndicator color="#0D0500" size="small" />
                  : <Text style={s.btnText}>Continue  →</Text>}
              </LinearGradient>
            </TouchableOpacity>

            {/* Login link */}
            <View style={s.loginRow}>
              <Text style={s.loginPrompt}>Already have an account?  </Text>
              <TouchableOpacity onPress={onBack}>
                <Text style={s.loginLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={s.footer}>ॐ  श्रीमद्भगवद्गीता</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0500' },
  glow1: { position: 'absolute', width: 280, height: 280, borderRadius: 140, backgroundColor: 'rgba(212,175,55,0.055)', top: -80, right: -80 },
  glow2: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: 'rgba(232,132,26,0.055)', bottom: 60, left: -70 },
  scroll: { flexGrow: 1, paddingHorizontal: 24, paddingTop: 56, paddingBottom: 40, alignItems: 'center' },
  backBtn: { alignSelf: 'flex-start', padding: 4, marginBottom: 24 },
  header: { width: '100%', marginBottom: 28 },
  title: { fontSize: 28, fontWeight: '800', color: '#D4AF37', letterSpacing: 0.5, marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#C9A96E', marginBottom: 20 },
  divRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  divLine: { flex: 1, height: 1, backgroundColor: 'rgba(212,175,55,0.20)' },
  divText: { fontSize: 18, color: 'rgba(212,175,55,0.40)' },
  card: {
    width: '100%', backgroundColor: 'rgba(255,248,240,0.035)',
    borderRadius: 22, borderWidth: 1, borderColor: 'rgba(212,175,55,0.26)', padding: 22,
  },
  errorBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,107,107,0.10)', borderRadius: 10, padding: 10, marginBottom: 14, gap: 8 },
  errorText: { fontSize: 13, color: '#FF6B6B', flex: 1 },
  label: { fontSize: 12, color: '#C9A96E', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 8, marginTop: 4 },
  inputWrap: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,248,240,0.06)', borderRadius: 13, borderWidth: 1, borderColor: 'rgba(212,175,55,0.28)', paddingHorizontal: 14, paddingVertical: 13, marginBottom: 14 },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 15, color: '#FFF8F0', padding: 0 },
  btn: { borderRadius: 13, paddingVertical: 15, alignItems: 'center', shadowColor: '#D4AF37', shadowOpacity: 0.28, shadowRadius: 10, shadowOffset: { width: 0, height: 3 }, elevation: 4, marginBottom: 20 },
  btnText: { fontSize: 16, fontWeight: '700', color: '#0D0500', letterSpacing: 0.8 },
  loginRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  loginPrompt: { fontSize: 14, color: '#7A5C34' },
  loginLink: { fontSize: 14, fontWeight: '600', color: '#D4AF37' },
  footer: { marginTop: 32, fontSize: 15, color: 'rgba(212,175,55,0.28)', letterSpacing: 3 },
});