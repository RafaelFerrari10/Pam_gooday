import { Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NextArrowButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function OnboardingScreen({ title, message, emoji, image, onNext }) {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <View style={styles.welcomeContent}>
        <View style={styles.onboardingHero}>
          {image ? (
            <Image source={image} style={styles.onboardingImage} resizeMode="contain" />
          ) : (
            <View style={styles.illustrationCircle}>
              <Text style={styles.illustrationEmoji}>{emoji}</Text>
            </View>
          )}
        </View>

        <Text style={styles.onboardingTitle}>{title}</Text>
        <Text style={styles.onboardingMessage}>{message}</Text>

        <View style={styles.onboardingNext}>
          <NextArrowButton onPress={onNext} />
        </View>
      </View>
    </SafeAreaView>
  );
}
