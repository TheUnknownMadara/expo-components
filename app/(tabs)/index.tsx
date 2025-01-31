import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Button,
  Pressable,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import H1 from '@/components/primitives/H1';
import H2 from '@/components/primitives/H2';
import Paragraph from '@/components/primitives/Paragraph';
import { COLORS } from '@/theme/colors';
import LucideIcon from '@/components/primitives/LucideIcon';
import { Toast } from '@/components/primitives/Toast';
import { useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [showToastSucess, setShowToastSucess] = useState(false);
  const [showToastInfo, setShowToastInfo] = useState(false);
  const [showToastError, setShowToastError] = useState(false);

  const useScheme = useColorScheme();
  return (
    <View
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
        size={50}
        animate={{ color: useScheme === 'dark' ? 'white' : 'black' }}
      />
      <H1>Mais um teste um pouco mais longo</H1>
      <H2 style={{ fontFamily: 'SpaceMono-Italic', color: 'green' }}>
        Puta que pariu, consegui
      </H2>
      <Paragraph>Bagulho é doido</Paragraph>


      <Pressable
        onPress={() => setShowToastSucess(true)}
        style={{
          backgroundColor: COLORS.dark.background,
          borderColor: COLORS.dark.text,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paragraph style={{ color: 'white' }}>Sucesso</Paragraph>
      </Pressable>
      {showToastSucess && (
        <Toast
          message="Deu melhor ainda"
          type="success"
          duration={3000}
          onHide={() => setShowToastSucess(false)}
        />
      )}

      <Pressable
        onPress={() => setShowToastInfo(true)}
        style={{
          backgroundColor: COLORS.dark.background,
          borderColor: COLORS.dark.text,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paragraph style={{ color: 'white' }}>Informação</Paragraph>
      </Pressable>
      {showToastInfo && (
        <Toast
          message="Tá aqui a informação"
          type="info"
          duration={3000}
          onHide={() => setShowToastInfo(false)}
        />
      )}

      <Pressable
        onPress={() => setShowToastError(true)}
        style={{
          backgroundColor: COLORS.dark.background,
          borderColor: COLORS.dark.text,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paragraph style={{ color: 'white' }}>Fudeu tudo</Paragraph>
      </Pressable>
      {showToastError && (
        <Toast
          message="Deu errado"
          type="error"
          duration={3000}
          onHide={() => setShowToastError(false)}
        />
      )}
    </View>
  );
}
