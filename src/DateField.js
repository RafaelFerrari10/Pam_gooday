import { createElement, useState } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { PrimaryButton } from './components';
import styles from './globalStyles';
import { COLORS } from './theme';

function toIso(date) {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${date.getFullYear()}-${m}-${d}`;
}

function formatDate(date) {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${d}/${m}/${date.getFullYear()}`;
}

function WebDateInput({ label, value, onChange, maximumDate }) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.inputShell}>
        {createElement('input', {
          type: 'date',
          value: value ? toIso(value) : '',
          max: maximumDate ? toIso(maximumDate) : undefined,
          onChange: (event) => {
            const [year, month, day] = event.target.value.split('-').map(Number);
            if (year && month && day) {
              onChange(new Date(year, month - 1, day));
            }
          },
          style: {
            flex: 1,
            height: '100%',
            borderWidth: 0,
            outline: 'none',
            background: 'transparent',
            fontSize: 14,
            fontWeight: '500',
            color: value ? COLORS.ink : COLORS.placeholder,
            paddingHorizontal: 12,
          },
        })}
      </View>
    </View>
  );
}

export default function DateField({ label, value, onChange, maximumDate }) {
  const [show, setShow] = useState(false);

  if (Platform.OS === 'web') {
    return <WebDateInput label={label} maximumDate={maximumDate} onChange={onChange} value={value} />;
  }

  const selected = value || new Date(2000, 0, 1);

  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => setShow(true)}
        style={({ pressed }) => [styles.inputShell, pressed && styles.pressed]}
      >
        <Text style={[styles.input, !value && styles.inputPlaceholder]}>
          {value ? formatDate(value) : 'DD/MM/AAAA'}
        </Text>
        <Text style={styles.fieldIcon}>📅</Text>
      </Pressable>

      {show ? (
        <View style={styles.datePickerWrap}>
          <DateTimePicker
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            maximumDate={maximumDate}
            mode="date"
            onChange={(event, date) => {
              if (Platform.OS === 'android') {
                setShow(false);
                if (event.type === 'set' && date) {
                  onChange(date);
                }
              } else if (date) {
                onChange(date);
              }
            }}
            value={selected}
          />
          {Platform.OS === 'ios' ? (
            <PrimaryButton onPress={() => setShow(false)} style={styles.datePickerConfirm}>
              Confirmar
            </PrimaryButton>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}
