import { useEffect } from 'react';
import { ActivityIndicator, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ASSETS } from './assets';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.loadingSafeArea}>
      <Pressable
        accessibilityLabel="Continuar para a tela principal"
        accessibilityRole="button"
        onPress={onFinish}
        style={styles.loadingScreen}
      >
        <StatusBar style="dark" backgroundColor={COLORS.white} />
        <Image source={ASSETS.logo} style={styles.loadingLogo} resizeMode="contain" />
        <ActivityIndicator size="small" color={COLORS.green} style={styles.loadingSpinner} />
      </Pressable>
    </SafeAreaView>
  );
}
