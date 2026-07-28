import { useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import SplashScreen from './src/SplashScreen';
import WelcomeScreen from './src/WelcomeScreen';

const VALID_SCREENS = new Set(['splash', 'welcome', 'login', 'register']);

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

  let currentScreen;

  if (screen === 'splash') {
    currentScreen = <SplashScreen onFinish={() => setScreen('welcome')} />;
  } else if (screen === 'login') {
    currentScreen = (
      <LoginScreen
        onBack={() => setScreen('welcome')}
        onRegister={() => setScreen('register')}
      />
    );
  } else if (screen === 'register') {
    currentScreen = <RegisterScreen onBack={() => setScreen('login')} />;
  } else {
    currentScreen = <WelcomeScreen onContinue={() => setScreen('login')} />;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {currentScreen}
    </SafeAreaProvider>
  );
}
