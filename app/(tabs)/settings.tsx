import AppScreen from '@/components/compositions/AppScreen';
import { Header } from '../../components/compositions/Header';
import LucideIcon from '../../components/primitives/LucideIcon';
import { SIZES } from '../../theme/sizes';
import { useColorScheme } from 'react-native';
import { ButtonIcon } from '../../theme/styles/components/primitives/LucideIcon';
import { COLORS } from '../../theme/colors';

export default function Components() {
  return (
    <AppScreen style={{ justifyContent: 'flex-start' }} padded={false}>
      <Header.Root style={{
        backgroundColor: useColorScheme() === 'light' ? COLORS.dark.background : COLORS.light.background,
        paddingTop: SIZES.screens.padding,
        paddingLeft: SIZES.screens.paddingleft,
      }}>
        <Header.LeftAction>
          <LucideIcon name="MoveLeft" size={24} {...ButtonIcon(useColorScheme())} />
        </Header.LeftAction>
        <Header.Title title='Settings'/>
      </Header.Root>
    </AppScreen>
  );
}
