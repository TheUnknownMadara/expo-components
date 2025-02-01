import { View, useColorScheme, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import H1 from '@/components/primitives/H1';
import H2 from '@/components/primitives/H2';
import Paragraph from '@/components/primitives/Paragraph';
import { COLORS } from '@/theme/colors';
import LucideIcon from '@/components/primitives/LucideIcon';
import { useToast } from '@/contexts/toastContext';
import { MotiView } from 'moti';
import { SIZES } from '@/theme/sizes';

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const { addToast } = useToast();
  const useScheme = useColorScheme();
  return (
    <MotiView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:
          useScheme === 'dark'
            ? COLORS.dark.background
            : COLORS.light.background,
        width: '100%',
        height: '100%',
        padding: 16,
        gap: 10,
      }}
    >
      <LucideIcon
        name="Atom"
        size={SIZES.icons.size.xxlarge}
      />
      <H1>Mais um teste um pouco mais longo</H1>
      <H2 style={{ fontFamily: 'SpaceMono-Italic', color: 'green' }}>
        Puta que pariu, consegui
      </H2>
      <Paragraph>Bagulho é doido</Paragraph>
    </MotiView>
  );
}
