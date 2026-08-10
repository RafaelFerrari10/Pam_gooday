import { useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import FaceFrameScreen from './src/FaceFrameScreen';
import HomeScreen from './src/HomeScreen';
import InterestsScreen from './src/InterestsScreen';
import LoadingScreen from './src/LoadingScreen';
import LoginScreen from './src/LoginScreen';
import OnboardingScreen from './src/OnboardingScreen';
import PhotoReviewScreen from './src/PhotoReviewScreen';
import ProfileAddressScreen from './src/ProfileAddressScreen';
import ProfileBirthdateScreen from './src/ProfileBirthdateScreen';
import ProfileNameScreen from './src/ProfileNameScreen';
import ProfilePhotoScreen from './src/ProfilePhotoScreen';
import RegisterScreen from './src/RegisterScreen';
import SplashScreen from './src/SplashScreen';
import WelcomeScreen from './src/WelcomeScreen';

import { ASSETS } from './src/assets';

const VALID_SCREENS = new Set([
  'splash',
  'welcome',
  'login',
  'register',
  'viva-bem',
  'treine-bem',
  'divirta-se',
  'alimente-bem',
  'name',
  'birthdate',
  'address',
  'photo',
  'face-frame',
  'photo-review',
  'interests',
  'loading',
  'home',
]);

const ONBOARDING_STEPS = [
  {
    name: 'viva-bem',
    title: 'Viva bem',
    message:
      'Adotar bons hábitos todos os dias transforma o seu bem-estar físico e mental.',
    emoji: '🧘',
  },
  {
    name: 'treine-bem',
    title: 'Treine bem',
    message:
      'A prática regular de exercícios dá mais energia, disposição e saúde para o seu dia.',
    emoji: '⚽',
  },
  {
    name: 'divirta-se',
    title: 'Divirta-se',
    message:
      'Aproveitar momentos de lazer e diversão é essencial para uma vida equilibrada.',
    image: ASSETS.hero,
  },
  {
    name: 'alimente-bem',
    title: 'Alimente-se bem',
    message:
      'Uma alimentação saudável e equilibrada é o combustível para viver bem.',
    emoji: '🍳',
  },
];

const ONBOARDING_NAMES = ONBOARDING_STEPS.map((step) => step.name);

function getInitialScreen() {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    const requestedScreen = new URLSearchParams(window.location.search).get('screen');

    if (VALID_SCREENS.has(requestedScreen)) {
      return { name: requestedScreen, pinned: true };
    }
  }

  return { name: 'splash', pinned: false };
}

export default function App() {
  const initialScreen = useMemo(() => getInitialScreen(), []);
  const [screen, setScreen] = useState(initialScreen.name);

  useEffect(() => {
    if (screen !== 'splash' || initialScreen.pinned) {
      return undefined;
    }

    const timer = setTimeout(() => setScreen('welcome'), 1400);
    return () => clearTimeout(timer);
  }, [initialScreen.pinned, screen]);

  const onboardingIndex = ONBOARDING_NAMES.indexOf(screen);

  let currentScreen;

  if (onboardingIndex !== -1) {
    const step = ONBOARDING_STEPS[onboardingIndex];
    const next = ONBOARDING_NAMES[onboardingIndex + 1] ?? 'name';
    currentScreen = (
      <OnboardingScreen
        emoji={step.emoji}
        image={step.image}
        message={step.message}
        onNext={() => setScreen(next)}
        title={step.title}
      />
    );
  } else if (screen === 'splash') {
    currentScreen = <SplashScreen onFinish={() => setScreen('welcome')} />;
  } else if (screen === 'login') {
    currentScreen = (
      <LoginScreen
        onAccess={() => setScreen('viva-bem')}
        onBack={() => setScreen('welcome')}
        onRegister={() => setScreen('register')}
      />
    );
  } else if (screen === 'register') {
    currentScreen = <RegisterScreen onBack={() => setScreen('login')} />;
  } else if (screen === 'name') {
    currentScreen = (
      <ProfileNameScreen
        onBack={() => setScreen('alimente-bem')}
        onNext={() => setScreen('birthdate')}
      />
    );
  } else if (screen === 'birthdate') {
    currentScreen = (
      <ProfileBirthdateScreen
        onBack={() => setScreen('name')}
        onNext={() => setScreen('address')}
      />
    );
  } else if (screen === 'address') {
    currentScreen = (
      <ProfileAddressScreen
        onBack={() => setScreen('birthdate')}
        onNext={() => setScreen('photo')}
      />
    );
  } else if (screen === 'photo') {
    currentScreen = (
      <ProfilePhotoScreen
        onBack={() => setScreen('address')}
        onNext={() => setScreen('face-frame')}
      />
    );
  } else if (screen === 'face-frame') {
    currentScreen = (
      <FaceFrameScreen
        onBack={() => setScreen('photo')}
        onNext={() => setScreen('photo-review')}
      />
    );
  } else if (screen === 'photo-review') {
    currentScreen = (
      <PhotoReviewScreen
        onBack={() => setScreen('face-frame')}
        onConfirm={() => setScreen('interests')}
        onRetake={() => setScreen('face-frame')}
      />
    );
  } else if (screen === 'interests') {
    currentScreen = (
      <InterestsScreen
        onBack={() => setScreen('photo-review')}
        onNext={() => setScreen('loading')}
      />
    );
  } else if (screen === 'loading') {
    currentScreen = <LoadingScreen onFinish={() => setScreen('home')} />;
  } else if (screen === 'home') {
    currentScreen = <HomeScreen />;
  } else {
    currentScreen = <WelcomeScreen onContinue={() => setScreen('login')} />;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {currentScreen}
    </SafeAreaProvider>
  );
}
