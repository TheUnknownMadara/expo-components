import { View, ViewProps, ViewStyle } from 'react-native';
import { Platform } from 'react-native';

export type HeaderRootProps = ViewProps & {
  style?: ViewStyle
};


export default function HeaderRoot({ children, style }: HeaderRootProps) {
  const isWeb = Platform.OS === 'web';
  return (
    <View
      style={{
        position: 'fixed',
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        flexDirection: 'row',
        ...isWeb && {
          display: 'none',
        }
      }}
      {...style as ViewStyle }
    >
      {children}
    </View>
  );
}
