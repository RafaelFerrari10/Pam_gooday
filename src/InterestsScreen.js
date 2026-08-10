import { useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, Chip, PrimaryButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

const INTERESTS = [
  { label: 'Cultura', emoji: '🎭' },
  { label: 'Música', emoji: '🎵' },
  { label: 'Esportes', emoji: '⚽' },
  { label: 'Viagens', emoji: '✈️' },
  { label: 'Tecnologia', emoji: '💻' },
  { label: 'Cinema', emoji: '🎬' },
  { label: 'Gastronomia', emoji: '🍽️' },
  { label: 'Saúde', emoji: '💚' },
  { label: 'Jogos', emoji: '🎮' },
  { label: 'Moda', emoji: '👗' },
  { label: 'Fotografia', emoji: '📷' },
  { label: 'Livros', emoji: '📚' },
  { label: 'Dança', emoji: '💃' },
  { label: 'Natureza', emoji: '🌿' },
];

export default function InterestsScreen({ onBack, onNext }) {
  const [selected, setSelected] = useState(() => new Set());

  const toggle = (label) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <View style={styles.formContent}>
        <BackButton onPress={onBack} />

        <Text style={styles.formTitle}>Quais os seus interesses?</Text>

        <View style={styles.interestsGrid}>
          {INTERESTS.map((interest) => (
            <Chip
              emoji={interest.emoji}
              key={interest.label}
              label={interest.label}
              onPress={() => toggle(interest.label)}
              selected={selected.has(interest.label)}
            />
          ))}
        </View>

        <PrimaryButton onPress={onNext} style={styles.stepButton}>
          Próximo
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
}
