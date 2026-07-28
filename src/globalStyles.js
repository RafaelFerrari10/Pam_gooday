import { StyleSheet } from 'react-native';

import { COLORS } from './theme';

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  splashSafeArea: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  pressed: {
    opacity: 0.68,
  },
  primaryButton: {
    minHeight: 62,
    borderRadius: 7,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  primaryButtonPressed: {
    backgroundColor: COLORS.greenPressed,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '500',
  },
  buttonIcon: {
    position: 'absolute',
    left: 14,
    width: 38,
    height: 38,
    backgroundColor: COLORS.white,
    borderRadius: 3,
  },
  outlineButton: {
    minHeight: 62,
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  outlineButtonPressed: {
    backgroundColor: '#F0FFF8',
  },
  outlineButtonText: {
    color: COLORS.ink,
    fontSize: 15,
    fontWeight: '500',
  },
  splashScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.green,
  },
  splashLogo: {
    width: 265,
    height: 113,
  },
  welcomeContent: {
    width: '100%',
    maxWidth: 480,
    minHeight: 900,
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingBottom: 46,
    backgroundColor: COLORS.white,
  },
  welcomeHero: {
    height: 450,
    marginHorizontal: -28,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    resizeMode: 'contain',
  },
  welcomeTitle: {
    marginTop: 52,
    color: COLORS.ink,
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomeSubtitle: {
    marginTop: 11,
    color: COLORS.ink,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  welcomeActions: {
    marginTop: 53,
    gap: 16,
  },
  formContent: {
    width: '100%',
    maxWidth: 480,
    minHeight: 900,
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingTop: 10,
    paddingBottom: 60,
    backgroundColor: COLORS.white,
  },
  backButton: {
    width: 44,
    height: 44,
    marginLeft: -5,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: -8 }],
  },
  backChevron: {
    width: 17,
    height: 17,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
    transform: [{ rotate: '45deg' }],
  },
  formTitle: {
    marginTop: 7,
    color: COLORS.ink,
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
  formSubtitle: {
    marginTop: -1,
    color: COLORS.ink,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },
  loginFields: {
    marginTop: 28,
    gap: 16,
  },
  registerFields: {
    marginTop: 28,
    gap: 16,
  },
  field: {
    gap: 2,
  },
  fieldLabel: {
    color: COLORS.ink,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
  inputShell: {
    height: 66,
    borderRadius: 4,
    backgroundColor: COLORS.input,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    color: COLORS.ink,
    fontSize: 14,
    fontWeight: '500',
    outlineStyle: 'none',
  },
  passwordInput: {
    paddingRight: 54,
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    width: 24,
    height: 17,
    borderWidth: 2,
    borderColor: COLORS.ink,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyePupil: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.ink,
  },
  eyePupilVisible: {
    backgroundColor: COLORS.green,
  },
  loginOptions: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.green,
  },
  checkmark: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '700',
  },
  optionText: {
    color: COLORS.ink,
    fontSize: 14,
    lineHeight: 20,
  },
  loginActions: {
    marginTop: 32,
    flexDirection: 'row',
    gap: 16,
  },
  halfButton: {
    flex: 1,
  },
  loginSocial: {
    marginTop: 78,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 23,
  },
  dividerLine: {
    height: StyleSheet.hairlineWidth,
    flex: 1,
    backgroundColor: COLORS.line,
  },
  dividerText: {
    color: COLORS.ink,
    fontSize: 14,
    lineHeight: 20,
  },
  socialButtons: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
  },
  socialButton: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: COLORS.social,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 64,
    height: 64,
  },
  registerButton: {
    marginTop: 134,
  },
  registerSocial: {
    marginTop: 49,
  },
});

export default styles;
