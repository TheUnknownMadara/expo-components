import {
  ColorSchemeName,
  Dimensions,
  DimensionValue,
  StyleSheet,
} from 'react-native';
import { SIZES } from '@/theme/sizes';
import { COLORS } from '@/theme/colors';
import { ToastProps, ToastQueueItem, ToastType } from '@/components/compositions/Toast';

export const messageStyle = StyleSheet.create({
  message: {
    flex: 1,
    marginHorizontal: 12,
  },
});

export function themeStyle(
  colorScheme: ColorSchemeName,
  type: ToastType
): object {
  switch (type) {
    case 'success':
      return success(colorScheme).success;
    case 'error':
      return error(colorScheme).error;
    case 'info':
      info(colorScheme);
    default:
      return info(colorScheme).info;
  }
}

export function toastLocation(
  location: ToastProps['location'],
  _bottom: DimensionValue,
  _top: DimensionValue
) {
  switch (location) {
    case 'top':
      return StyleSheet.create({
        toastLocation: {
          top: _top,
        },
      }).toastLocation;
    case 'bottom':
      return StyleSheet.create({
        toastLocation: {
          bottom: _bottom,
        },
      }).toastLocation;
  }
}

export function success(
  colorScheme: ColorSchemeName
): StyleSheet.NamedStyles<any> {
  switch (colorScheme) {
    case 'dark':
      return StyleSheet.create({
        success: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.dark.status.success,
          borderColor: COLORS.dark.status.success,
          borderWidth: SIZES.cards.border,
        },
      });
    case 'light':
      return StyleSheet.create({
        success: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.light.status.success,
          borderColor: COLORS.light.status.success,
          borderWidth: SIZES.cards.border,
        },
      });
    default:
      return StyleSheet.create({
        success: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.dark.status.success,
          borderColor: COLORS.dark.status.success,
          borderWidth: SIZES.cards.border,
        },
      });
  }
}

export function info(
  colorScheme: ColorSchemeName
): StyleSheet.NamedStyles<any> {
  switch (colorScheme) {
    case 'dark':
      return StyleSheet.create({
        info: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.dark.backgroundGlassMorph,
          borderColor: COLORS.dark.getText(),
          borderWidth: SIZES.cards.border,
          borderStyle: 'solid',
        },
      });
    case 'light':
      return StyleSheet.create({
        info: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.light.backgroundGlassMorph,
          borderColor: COLORS.light.getText(),
          borderWidth: SIZES.cards.border,
          borderStyle: 'solid',
        },
      });
    default:
      return StyleSheet.create({
        info: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.dark.backgroundGlassMorph,
          borderColor: COLORS.dark.getText(),
          borderWidth: SIZES.cards.border,
          borderStyle: 'solid',
        },
      });
  }
}

export function error(
  colorScheme: ColorSchemeName
): StyleSheet.NamedStyles<any> {
  switch (colorScheme) {
    case 'dark':
      return StyleSheet.create({
        error: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.dark.status.error,
          borderColor: COLORS.dark.status.error,
          borderWidth: SIZES.cards.border,
        },
      });
    case 'light':
      return StyleSheet.create({
        error: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.light.status.error,
          borderColor: COLORS.light.status.error,
          borderWidth: SIZES.cards.border,
        },
      });
    default:
      return StyleSheet.create({
        error: {
          borderRadius: SIZES.cards.radius,
          backgroundColor: COLORS.light.status.error,
          borderColor: COLORS.light.status.error,
          borderWidth: SIZES.cards.border,
        },
      });
  }
}

export const messageColor = (
  type: ToastType,
  theme: ColorSchemeName
): string => {
  switch (type) {
    case 'success':
      return theme === 'dark'
        ? COLORS.dark.status.success
        : COLORS.light.status.success;
    case 'error':
      return theme === 'dark'
        ? COLORS.dark.status.error
        : COLORS.light.status.error;
    default:
      return theme === 'dark' ? COLORS.dark.getText() : COLORS.light.getText();
  }
};

export function blurView(colorScheme: ColorSchemeName): object {
  return StyleSheet.create({
    blurView: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor:
        colorScheme === 'dark'
          ? COLORS.dark.backgroundGlassMorph
          : COLORS.light.backgroundGlassMorph,
    },
  }).blurView;
}

export function container(
  type: ToastType,
  theme: ColorSchemeName,
  location: ToastQueueItem['location'] = 'top',
  _bottom: ToastQueueItem['_bottom'] = 40,
  _top: ToastQueueItem['_top'] = 40
) {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: Dimensions.get('window').width - 32,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      overflow: 'hidden',
      ...themeStyle(theme, type),
      ...toastLocation(location, _bottom, _top),
    },
  });
}
