import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton } from './components';
import DropdownField from './DropdownField';
import { CITIES_BY_STATE, STATES } from './data/cities';
import {
  DEFAULT_NEIGHBORHOODS,
  NEIGHBORHOODS_BY_CITY,
} from './data/neighborhoods';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function ProfileAddressScreen({ onBack, onNext }) {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const cities = state ? CITIES_BY_STATE[state] : [];
  const neighborhoods = city
    ? NEIGHBORHOODS_BY_CITY[city] || DEFAULT_NEIGHBORHOODS
    : [];

  const handleState = (value) => {
    setState(value);
    setCity('');
    setNeighborhood('');
  };

  const handleCity = (value) => {
    setCity(value);
    setNeighborhood('');
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.appBackground}
      >
        <View style={styles.formContent}>
          <BackButton onPress={onBack} />

          <Text style={styles.formTitle}>Qual é o seu endereço?</Text>

          <View style={styles.stepFields}>
            <DropdownField
              label="Estado"
              onChange={handleState}
              options={STATES}
              placeholder="Selecione seu estado"
              value={state}
            />
            <DropdownField
              label="Cidade"
              onChange={handleCity}
              options={cities}
              placeholder={state ? 'Selecione sua cidade' : 'Selecione o estado primeiro'}
              value={city}
            />
            <DropdownField
              label="Bairro"
              onChange={setNeighborhood}
              options={neighborhoods}
              placeholder={city ? 'Selecione seu bairro' : 'Selecione a cidade primeiro'}
              value={neighborhood}
            />
          </View>

          <PrimaryButton onPress={onNext} style={styles.stepButton}>
            Próximo
          </PrimaryButton>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
