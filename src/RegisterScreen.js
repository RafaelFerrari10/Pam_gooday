import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  BackButton,
  Field,
  PrimaryButton,
  SocialButtons,
  SocialDivider,
} from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function RegisterScreen({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [visibleField, setVisibleField] = useState(null);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.appBackground}
      >
        <View style={styles.formContent}>
          <BackButton onPress={onBack} />

          <Text style={styles.formTitle}>Cadastre-se</Text>
          <Text style={styles.formSubtitle}>Informe seu E-mail e crie uma senha</Text>

          <View style={styles.registerFields}>
            <Field
              label="E-mail"
              onChangeText={setEmail}
              placeholder="Digite seu E-mail"
              value={email}
            />
            <Field
              label="Crie uma senha"
              onChangeText={setPassword}
              onToggleVisibility={() =>
                setVisibleField((current) =>
                  current === 'password' ? null : 'password'
                )
              }
              password
              placeholder="Digite sua senha"
              value={password}
              visible={visibleField === 'password'}
            />
            <Field
              label="Repita a senha"
              onChangeText={setConfirmation}
              onToggleVisibility={() =>
                setVisibleField((current) =>
                  current === 'confirmation' ? null : 'confirmation'
                )
              }
              password
              placeholder="Digite sua senha"
              value={confirmation}
              visible={visibleField === 'confirmation'}
            />
          </View>

          <PrimaryButton style={styles.registerButton}>Cadastrar</PrimaryButton>

          <View style={styles.registerSocial}>
            <SocialDivider />
            <SocialButtons />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
