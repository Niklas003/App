/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = '#29323C';
const tintColorDark = '#fff';
export const corporateYellow = '#E39600'
export const corporateColor = '#29323C'
export const corporateLightWhite = '#F4F4F6'

export const Colors = {
  light: {
    text: corporateColor,
    background: corporateLightWhite,
    cardColor: '#FFFFFF',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    placeholder: 'rgba(41, 50, 60, 0.7)',
  },
  dark: {
    text: corporateLightWhite,
    background: '#232930ff',
    cardColor: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    placeholder: '#E5E5E5',
  },
};
