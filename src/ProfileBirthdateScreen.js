import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton } from './components';
import DateField from './DateField';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function ProfileBirthdateScreen({ onBack, onNext }) {
  const [birthdate, setBirthdate] = useState(null);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.appBackground}
      >
        <View style={styles.formContent}>
          <BackButton onPress={onBack} />

          <Text style={styles.formTitle}>Quando você nasceu?</Text>

          <View style={styles.stepFields}>
            <DateField
              label="Data de nascimento"
              maximumDate={new Date()}
              onChange={setBirthdate}
              value={birthdate}
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
