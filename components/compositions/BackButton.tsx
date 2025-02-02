import { router } from 'expo-router';
import Button from '../primitives/Button';
import LucideIcon from '../primitives/LucideIcon';
import { SIZES } from '../../theme/sizes';
import { ButtonIcon } from '../../theme/styles/components/primitives/LucideIcon';
import { useColorScheme } from 'react-native';

export default function BackButton() {
  return (
    <Button
      style={{
        width: SIZES.icons.size.xlarge,
        height: SIZES.icons.size.xlarge,
      }}
      onPress={() => router.back()}
    >
      <LucideIcon name="MoveLeft" {...ButtonIcon(useColorScheme())} size={SIZES.icons.size.medium} />
    </Button>
  );
}
