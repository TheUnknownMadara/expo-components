import AppScreen from '@/components/compositions/AppScreen';
import { Header } from '../../components/compositions/Header';
import LucideIcon from '../../components/primitives/LucideIcon';
import { SIZES } from '../../theme/sizes';
import { Pressable } from 'react-native';
import { COLORS } from '../../theme/colors';
import { Link } from 'expo-router';
import { View } from 'moti';
import Paragraph from '../../components/primitives/Paragraph';
import H2 from '../../components/primitives/H2';
import { useThemeStore } from '../../hooks/useThemesStore';
import { ThemeSelector } from '../../components/compositions/ThemeSelector';


export default function Components() {
  const { scheme, mode } = useThemeStore();

  const colors = COLORS[scheme][mode];

  return (
    <AppScreen
      style={{
        justifyContent: 'flex-start',
        padding: SIZES.screens.paddingleft,
      }}
      padded={false}
    >
      <Header.Root
        style={{
          backgroundColor: colors.foreground,
          paddingLeft: SIZES.screens.paddingleft - 3,
          borderRadius: SIZES.cards.radius,
          justifyContent: 'center',
          boxShadow: `0 8px 32px 0 ${colors.surface.unresolved.getSurface16()}`,
          borderWidth: SIZES.cards.border,
        }}
      >
        <Header.LeftAction>
          <Pressable
            style={{
              backgroundColor: colors.background,
              borderRadius: SIZES.cards.radius / 2,
              padding: 3,
            }}
          >
            <Link href="/">
              <LucideIcon name="ArrowLeft" size={SIZES.icons.size.medium} />
            </Link>
          </Pressable>
        </Header.LeftAction>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Header.Title
            title="Components"
            selectable={false}
            style={{
              color: colors.background,
              marginRight:
                SIZES.icons.size.medium +
                SIZES.screens.paddingleft +
                SIZES.screens.paddingleft +
                3,
              fontFamily: 'Metropolis-Light',
              fontSize: SIZES.text.fontSize.p,
            }}
          />
        </View>
      </Header.Root>

      <Pressable
        style={{
          display: 'flex',
          width: '100%',
          backgroundColor: colors.surface.unresolved.getSurface12(),
          borderColor: colors.surface.unresolved.getSurface50(),
          boxShadow: `0 8px 32px 0 ${colors.surface.unresolved.getSurface8()}`,
          borderWidth: SIZES.cards.border,
          padding: SIZES.screens.paddingleft,
          borderRadius: SIZES.cards.radius,
          shadowColor: colors.surface.unresolved.getSurface8(),
          minHeight: 100,
        }}
      >
        <H2
          style={{
            fontFamily: 'Metropolis-Black',
            fontSize: SIZES.text.fontSize.medium,
          }}
        >
          Title
        </H2>
        <Paragraph
          style={{
            fontFamily: 'Metropolis-Light',
            lineHeight: SIZES.text.lineHeight.p - 2,
            maxWidth: '70%',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.
        </Paragraph>
      </Pressable>
      <ThemeSelector />
    </AppScreen>
  );
}
