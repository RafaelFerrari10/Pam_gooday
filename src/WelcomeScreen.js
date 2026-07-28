import { Image, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ASSETS } from './assets';
import { OutlineButton, PrimaryButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function WelcomeScreen({ onContinue }) {
  return (
    <View style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.welcomeContent}
        showsVerticalScrollIndicator={false}
      >
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
      </ScrollView>
    </View>
  );
}
