import AppScreen from '@/components/compositions/AppScreen';
import Button from '@/components/primitives/Button';
import H1 from '@/components/primitives/H1';
import H2 from '@/components/primitives/H2';
import LucideIcon from '@/components/primitives/LucideIcon';
import Paragraph from '@/components/primitives/Paragraph';
import { SIZES } from '@/theme/sizes';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'moti';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  return (
    <AppScreen style={{ justifyContent: 'space-between', paddingTop: 100 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: SIZES.screens.gap,
        }}
      >
        <LucideIcon name="Atom" size={SIZES.icons.size.xxlarge} />
        <H1
          style={{
            textAlign: 'center',
          }}
        >
          Components Library
        </H1>
        <H2 style={{ textAlign: 'center', fontSize: SIZES.text.fontSize.medium }}>
          This app is intended to be used as a starting point for building
          another apps. It tries to implement a consistent design system, with
          reusable components and a set of colors and sizes that can be used to
          build beautiful stuff.
        </H2>
        <Paragraph
          style={{
            fontFamily: 'RobotoMono_100Thin',
          }}
        >
          Use without moderation
        </Paragraph>
      </View>
        <Button title="Go to components" onPress={() => router.push('/components')} />
    </AppScreen>
  );
}
