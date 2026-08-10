import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

import styles from './globalStyles';

export default function DropdownField({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Selecione',
}) {
  const [open, setOpen] = useState(false);

  const disabled = options.length === 0;

  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        onPress={() => {
          if (!disabled) {
            setOpen(true);
          }
        }}
        style={({ pressed }) => [
          styles.inputShell,
          disabled && styles.inputShellDisabled,
          pressed && !disabled && styles.pressed,
        ]}
      >
        <Text style={[styles.input, !value && styles.inputPlaceholder]}>
          {value || placeholder}
        </Text>
        <Text style={[styles.fieldIcon, disabled && styles.fieldIconDisabled]}>▾</Text>
      </Pressable>

      <Modal
        animationType="slide"
        onRequestClose={() => setOpen(false)}
        transparent
        visible={open}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalPanel}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{label}</Text>
              <Pressable
                accessibilityLabel="Fechar"
                accessibilityRole="button"
                onPress={() => setOpen(false)}
                style={({ pressed }) => [styles.modalClose, pressed && styles.pressed]}
              >
                <Text style={styles.modalCloseText}>✕</Text>
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {options.map((option) => {
                const selected = option === value;
                return (
                  <Pressable
                    accessibilityRole="button"
                    key={option}
                    onPress={() => {
                      onChange(option);
                      setOpen(false);
                    }}
                    style={({ pressed }) => [
                      styles.dropdownOption,
                      selected && styles.dropdownOptionSelected,
                      pressed && styles.pressed,
                    ]}
                  >
                    <Text
                      style={[
                        styles.dropdownOptionText,
                        selected && styles.dropdownOptionTextSelected,
                      ]}
                    >
                      {option}
                    </Text>
                    {selected ? (
                      <Text style={styles.dropdownOptionCheck}>✓</Text>
                    ) : null}
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
