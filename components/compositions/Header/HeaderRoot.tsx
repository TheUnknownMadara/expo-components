import { View, ViewProps, ViewStyle } from 'react-native';

export type HeaderRootProps = ViewProps & {
  style?: ViewStyle
};


export default function HeaderRoot({ children, style }: HeaderRootProps) {
  return (
    <View
      style={{
        position: 'fixed',
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        flexDirection: 'row',
      }}
      {...style as ViewStyle}
    >
      {children}
    </View>
  );
}
