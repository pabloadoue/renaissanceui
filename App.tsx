import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { RenaissanceProvider, TRenaissanceProviderPallete } from './src';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Linking from "./linking";

const Stack = createNativeStackNavigator();

import Components from "./routes/components";

export default function App() {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  const [pallete, setPallete] = useState<TRenaissanceProviderPallete>({
    primary: {
      light: '#c40000',
      dark: '#c40000',
    },
    accent: {
      light: "rgb(255,204,0)",
      dark: "rgb(255,204,0)"
    }
  });

  return <RenaissanceProvider
    pallete={pallete}
    colorMode={colorMode}
    linking={Linking()}
  >
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="components">
        {(props) => <Components {...props} setColorMode={setColorMode} />}
      </Stack.Screen>
    </Stack.Navigator>
  </RenaissanceProvider>
}
