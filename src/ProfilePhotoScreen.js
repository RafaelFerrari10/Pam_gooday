import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton } from './components';
import PhotoPickerScreen from './PhotoPickerScreen';
import styles from './globalStyles';
import { COLORS } from './theme';

export default function ProfilePhotoScreen({ onBack, onNext }) {
  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <View style={styles.formContent}>
        <BackButton onPress={onBack} />

        <Text style={styles.formTitle}>Tire ou escolha uma foto de perfil</Text>

        <View style={styles.photoPreview}>
          <Text style={styles.photoPreviewEmoji}>👤</Text>
        </View>

        <View style={styles.photoOptions}>
          <Pressable
            accessibilityRole="button"
            onPress={() => setPickerVisible(true)}
            style={({ pressed }) => [
              styles.photoOption,
              pressed && styles.photoOptionPressed,
            ]}
          >
            <Text style={styles.photoOptionEmoji}>🖼️</Text>
            <Text style={styles.photoOptionText}>Galeria</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={onNext}
            style={({ pressed }) => [
              styles.photoOption,
              pressed && styles.photoOptionPressed,
            ]}
          >
            <Text style={styles.photoOptionEmoji}>📸</Text>
            <Text style={styles.photoOptionText}>Tire foto</Text>
          </Pressable>
        </View>
      </View>

      <PhotoPickerScreen
        onClose={() => setPickerVisible(false)}
        onConfirm={() => {
          setPickerVisible(false);
          onNext();
        }}
        visible={pickerVisible}
      />
    </SafeAreaView>
  );
}
