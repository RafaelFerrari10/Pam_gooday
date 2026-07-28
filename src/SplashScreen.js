import { Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ASSETS } from './assets';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function SplashScreen({ onFinish }) {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.splashSafeArea}>
      <Pressable
        accessibilityLabel="Avançar para a tela de boas-vindas"
        accessibilityRole="button"
        onPress={onFinish}
        style={styles.splashScreen}
      >
        <StatusBar style="light" backgroundColor={COLORS.green} />
        <Image source={ASSETS.logo} style={styles.splashLogo} resizeMode="contain" />
      </Pressable>
    </SafeAreaView>
  );
}
