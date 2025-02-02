import AppScreen from '@/components/compositions/AppScreen';
import { Header } from '../../components/compositions/Header';
import LucideIcon from '../../components/primitives/LucideIcon';
import { SIZES } from '../../theme/sizes';
import { Pressable, useColorScheme } from 'react-native';
import { ButtonIcon } from '../../theme/styles/components/primitives/LucideIcon';
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
          paddingLeft: SIZES.screens.paddingleft,
          borderRadius: SIZES.cards.radius,
          justifyContent: 'center',
        }}
      >
        <Header.LeftAction>
          <Link href="/">
            <LucideIcon
              name="MoveLeft"
              size={SIZES.icons.size.large}
              {...ButtonIcon(theme)}
            />
          </Link>
        </Header.LeftAction>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Header.Title
            title="Components"
            selectable={false}
            style={{
              color: theme === 'dark' ? COLORS.light.getText() : COLORS.dark.getText(),
              marginRight:
                SIZES.icons.size.large +
                SIZES.screens.paddingleft +
                SIZES.screens.paddingleft,
            }}
          />
        </View>
      </Header.Root>


      <Pressable
        style={{
          display: 'flex',
          width: '100%',
          backgroundColor: theme === 'dark' ? COLORS.dark.surface.surface8 : COLORS.light.surface.surface16,
          borderColor: theme === 'dark' ? COLORS.dark.surface.surface16 : COLORS.light.surface.surface16,
          borderWidth: SIZES.cards.border,
          padding: SIZES.screens.paddingleft,
          borderRadius: SIZES.cards.radius,
          shadowColor: COLORS.light.surface.surface16,
          minHeight: 100,
        }}
      >
        <H2 style={{
          fontFamily: 'RobotoMono_700Bold',
          fontSize: SIZES.text.fontSize.medium,
        }}>Title</H2>
        <Paragraph style={{
          fontFamily: 'RobotoMono_400Regular',
          lineHeight: SIZES.text.lineHeight.p - 2,
          maxWidth: '70%',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        </Paragraph>
      </Pressable>

      <Pressable
        style={{
          display: 'flex',
          width: '100%',
          backgroundColor: theme === 'dark' ? COLORS.dark.surface.surface8 : COLORS.light.surface.surface16,
          borderColor: theme === 'dark' ? COLORS.dark.surface.surface16 : COLORS.light.surface.surface16,
          borderWidth: SIZES.cards.border,
          padding: SIZES.screens.paddingleft,
          borderRadius: SIZES.cards.radius,
          shadowColor: COLORS.light.surface.surface16,
          minHeight: 100
        }}
      >
        <H2 style={{
          fontFamily: 'RobotoMono_700Bold',
          fontSize: SIZES.text.fontSize.medium,
        }}>Title</H2>
        <Paragraph style={{
          fontFamily: 'RobotoMono_400Regular',
          lineHeight: SIZES.text.lineHeight.p - 2,
          maxWidth: '70%',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        </Paragraph>
      </Pressable>
    </AppScreen>
  );
}
