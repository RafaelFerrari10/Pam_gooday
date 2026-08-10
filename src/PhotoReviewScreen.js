import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, OutlineButton, PrimaryButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function PhotoReviewScreen({ onBack, onRetake, onConfirm }) {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <View style={styles.formContent}>
        <BackButton onPress={onBack} />

        <Text style={styles.formTitle}>Sua foto ficou boa?</Text>

        <View style={styles.photoPreview}>
          <Text style={styles.photoPreviewEmoji}>😊</Text>
        </View>

        <View style={styles.reviewActions}>
          <OutlineButton onPress={onRetake} style={styles.halfButton}>
            Tirar outra
          </OutlineButton>
          <PrimaryButton onPress={onConfirm} style={styles.halfButton}>
            Ficou boa
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
