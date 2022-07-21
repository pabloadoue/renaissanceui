import React, { useState } from 'react';

import { Text } from 'react-native';
import { RenaissanceProvider, TRenaissanceProviderPallete, UIButton } from 'renaissanceui';

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
  return <RenaissanceProvider colorMode={colorMode} pallete={pallete}>
    <UIButton label="Hello World" />
  </RenaissanceProvider>
}
