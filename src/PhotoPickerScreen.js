import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

import { PrimaryButton } from './components';
import styles from './globalStyles';

const PHOTOS = [
  { id: 'p1', emoji: '🌄' },
  { id: 'p2', emoji: '🏖️' },
  { id: 'p3', emoji: '🌳' },
  { id: 'p4', emoji: '🐶' },
  { id: 'p5', emoji: '☕' },
  { id: 'p6', emoji: '🎨' },
  { id: 'p7', emoji: '🏔️' },
  { id: 'p8', emoji: '🌸' },
  { id: 'p9', emoji: '🎈' },
  { id: 'p10', emoji: '🍕' },
  { id: 'p11', emoji: '🚲' },
  { id: 'p12', emoji: '🌆' },
];

export default function PhotoPickerScreen({ visible, onClose, onConfirm }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (visible) {
      setSelected(null);
    }
  }, [visible]);

  const confirm = () => {
    if (selected) {
      onConfirm(selected);
    }
  };

  return (
    <Modal animationType="slide" onRequestClose={onClose} transparent visible={visible}>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalPanel}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Selecione uma foto</Text>
            <Pressable
              accessibilityLabel="Fechar"
              accessibilityRole="button"
              onPress={onClose}
              style={({ pressed }) => [styles.modalClose, pressed && styles.pressed]}
            >
              <Text style={styles.modalCloseText}>✕</Text>
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.photoGrid}>
              {PHOTOS.map((photo) => (
                <Pressable
                  accessibilityRole="button"
                  key={photo.id}
                  onPress={() => setSelected(photo.id)}
                  style={({ pressed }) => [
                    styles.pickerPhoto,
                    selected === photo.id && styles.pickerPhotoSelected,
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={styles.pickerPhotoEmoji}>{photo.emoji}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>

          <PrimaryButton onPress={confirm} style={styles.pickerConfirm}>
            Usar esta foto
          </PrimaryButton>
        </View>
      </View>
    </Modal>
  );
}
