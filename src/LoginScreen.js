import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  BackButton,
  Field,
  OutlineButton,
  PrimaryButton,
  SocialButtons,
  SocialDivider,
} from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function LoginScreen({ onBack, onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.appBackground}
    >
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.formContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={onBack} />

        <Text style={styles.formTitle}>Acesse</Text>
        <Text style={styles.formSubtitle}>com E-mail e senha</Text>

        <View style={styles.loginFields}>
          <Field
            label="E-mail"
            onChangeText={setEmail}
            placeholder="Digite seu E-mail"
            value={email}
          />
          <Field
            label="Senha"
            onChangeText={setPassword}
            onToggleVisibility={() => setPasswordVisible((current) => !current)}
            password
            placeholder="Digite sua senha"
            value={password}
            visible={passwordVisible}
          />
        </View>

        <View style={styles.loginOptions}>
          <Pressable
            accessibilityRole="checkbox"
            accessibilityState={{ checked: remember }}
            onPress={() => setRemember((current) => !current)}
            style={({ pressed }) => [styles.rememberOption, pressed && styles.pressed]}
          >
            <View style={[styles.checkbox, remember && styles.checkboxChecked]}>
              {remember ? <Text style={styles.checkmark}>✓</Text> : null}
            </View>
            <Text style={styles.optionText}>Lembrar senha</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => pressed && styles.pressed}
          >
            <Text style={styles.optionText}>Esqueci minha senha</Text>
          </Pressable>
        </View>

        <View style={styles.loginActions}>
          <PrimaryButton style={styles.halfButton}>Acessar</PrimaryButton>
          <OutlineButton onPress={onRegister} style={styles.halfButton}>
            Cadastrar
          </OutlineButton>
        </View>

        <View style={styles.loginSocial}>
          <SocialDivider />
          <SocialButtons />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
