import { Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ASSETS } from './assets';
import { OutlineButton, PrimaryButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function WelcomeScreen({ onContinue }) {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <View style={styles.welcomeContent}>
        <View style={styles.welcomeHero}>
          <Image source={ASSETS.hero} style={styles.heroImage} resizeMode="contain" />
        </View>

        <Text style={styles.welcomeTitle}>Ótimo dia!</Text>
        <Text style={styles.welcomeSubtitle}>Como deseja acessar?</Text>

        <View style={styles.welcomeActions}>
          <PrimaryButton icon={ASSETS.google} onPress={onContinue}>
            Como deseja acessar?
          </PrimaryButton>
          <OutlineButton onPress={onContinue}>Outras opções</OutlineButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
