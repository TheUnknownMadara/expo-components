import AppScreen from '@/components/compositions/AppScreen';
import { Header } from '../../components/compositions/Header';
import LucideIcon from '../../components/primitives/LucideIcon';
import { SIZES } from '../../theme/sizes';
import { Pressable, useColorScheme } from 'react-native';
import { COLORS } from '../../theme/colors';
import { Link } from 'expo-router';
import { View } from 'moti';
import Paragraph from '../../components/primitives/Paragraph';
import H2 from '../../components/primitives/H2';

export default function Components() {
  const theme = useColorScheme();
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
          backgroundColor:
            theme === 'dark' ? COLORS.light.background : COLORS.dark.background,
          paddingLeft: SIZES.screens.paddingleft - 3,
          borderRadius: SIZES.cards.radius,
          justifyContent: 'center',
        }}
      >
        <Header.LeftAction>
          <Pressable
            style={{
              backgroundColor:
                theme === 'dark'
                  ? COLORS.dark.background
                  : COLORS.light.background,
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
              color:
                theme === 'dark'
                  ? COLORS.light.getText()
                  : COLORS.dark.getText(),
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
          backgroundColor:
            theme === 'dark'
              ? COLORS.dark.surface.surface12
              : COLORS.light.surface.surface12,
          borderColor:
            theme === 'dark'
              ? COLORS.dark.surface.surface50
              : COLORS.light.surface.surface50,
          boxShadow: theme === 'dark' ? `0 8px 32px 0 ${COLORS.dark.surface.surface8}` : `0 8px 32px 0 ${COLORS.light.surface.surface8}`,
          borderWidth: SIZES.cards.border,
          padding: SIZES.screens.paddingleft,
          borderRadius: SIZES.cards.radius,
          shadowColor: COLORS.light.surface.surface16,
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
    </AppScreen>
  );
}
