import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, Field, PrimaryButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function ProfileNameScreen({ onBack, onNext }) {
  const [name, setName] = useState('');

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.appBackground}
      >
        <View style={styles.formContent}>
          <BackButton onPress={onBack} />

          <Text style={styles.formTitle}>Qual é o seu nome?</Text>

          <View style={styles.stepFields}>
            <Field
              label="Nome"
              onChangeText={setName}
              placeholder="Digite seu nome"
              value={name}
            />
          </View>

          <PrimaryButton onPress={onNext} style={styles.stepButton}>
            Próximo
          </PrimaryButton>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
