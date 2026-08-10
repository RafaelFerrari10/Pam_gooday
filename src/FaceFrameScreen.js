import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function FaceFrameScreen({ onBack, onNext }) {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <View style={styles.formContent}>
        <BackButton onPress={onBack} />

        <Text style={styles.formTitle}>Ajuste sua foto</Text>

        <View style={styles.faceFrame}>
          <Text style={styles.faceFrameEmoji}>😊</Text>
          <View style={styles.faceTarget} />
        </View>

        <Text style={styles.faceInstruction}>Encaixe o rosto na área marcada</Text>

        <PrimaryButton onPress={onNext} style={styles.stepButton}>
          Próximo
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
}
