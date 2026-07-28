import { useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';

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

  if (screen === 'splash') {
    return <SplashScreen onFinish={() => setScreen('welcome')} />;
  }

  if (screen === 'login') {
    return (
      <LoginScreen
        onBack={() => setScreen('welcome')}
        onRegister={() => setScreen('register')}
      />
    );
  }

  if (screen === 'register') {
    return <RegisterScreen onBack={() => setScreen('login')} />;
  }

  return <WelcomeScreen onContinue={() => setScreen('login')} />;
}
