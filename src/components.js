import { Image, Pressable, Text, TextInput, View } from 'react-native';

import { ASSETS } from './assets';
import styles from './globalStyles';
import { COLORS } from './theme';

export function PrimaryButton({ children, onPress, style, icon }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.primaryButton,
        style,
        pressed && styles.primaryButtonPressed,
      ]}
    >
      {icon ? <Image source={icon} style={styles.buttonIcon} resizeMode="contain" /> : null}
      <Text style={styles.primaryButtonText}>{children}</Text>
    </Pressable>
  );
}

export function OutlineButton({ children, onPress, style }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.outlineButton,
        style,
        pressed && styles.outlineButtonPressed,
      ]}
    >
      <Text style={styles.outlineButtonText}>{children}</Text>
    </Pressable>
  );
}

export function BackButton({ onPress }) {
  return (
    <Pressable
      accessibilityLabel="Voltar"
      accessibilityRole="button"
      hitSlop={10}
      onPress={onPress}
      style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
    >
      <View style={styles.backChevron} />
    </Pressable>
  );
}

function EyeIcon({ visible }) {
  return (
    <View style={styles.eye}>
      <View style={[styles.eyePupil, visible && styles.eyePupilVisible]} />
    </View>
  );
}

export function Field({
  label,
  placeholder,
  value,
  onChangeText,
  password = false,
  visible = false,
  onToggleVisibility,
  keyboardType,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.inputShell}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          secureTextEntry={password && !visible}
          style={[styles.input, password && styles.passwordInput]}
          value={value}
        />
        {password ? (
          <Pressable
            accessibilityLabel={visible ? 'Ocultar senha' : 'Mostrar senha'}
            accessibilityRole="button"
            hitSlop={10}
            onPress={onToggleVisibility}
            style={({ pressed }) => [styles.eyeButton, pressed && styles.pressed]}
          >
            <EyeIcon visible={visible} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export function SocialButtons() {
  return (
    <View style={styles.socialButtons}>
      <Pressable
        accessibilityLabel="Continuar com Google"
        accessibilityRole="button"
        style={({ pressed }) => [styles.socialButton, pressed && styles.pressed]}
      >
        <Image source={ASSETS.google} style={styles.socialIcon} resizeMode="contain" />
      </Pressable>
      <Pressable
        accessibilityLabel="Continuar com Facebook"
        accessibilityRole="button"
        style={({ pressed }) => [styles.socialButton, pressed && styles.pressed]}
      >
        <Image source={ASSETS.facebook} style={styles.socialIcon} resizeMode="contain" />
      </Pressable>
    </View>
  );
}

export function SocialDivider() {
  return (
    <View style={styles.dividerRow}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>Ou continue com</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}

export function NextArrowButton({ onPress, style }) {
  return (
    <Pressable
      accessibilityLabel="Avançar"
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.nextArrowButton,
        style,
        pressed && styles.nextArrowButtonPressed,
      ]}
    >
      <View style={styles.nextArrow} />
    </Pressable>
  );
}

export function Chip({ emoji, label, selected = false, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.interestChip,
        selected && styles.interestChipSelected,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.interestChipRow}>
        {emoji ? <Text style={styles.interestChipEmoji}>{emoji}</Text> : null}
        <Text
          style={[styles.interestChipText, selected && styles.interestChipTextSelected]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
