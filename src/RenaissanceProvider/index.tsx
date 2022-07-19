import { NativeBaseProvider } from "native-base";
import { LinkingOptions } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from "./theme";
import Navigator from "./navigator";

export function RenaissanceProvider(props: TRenaissanceProviderProps) {
    const { colorMode } = props;

    const lightTheme = theme("light", props.pallete);
    const darkTheme = theme("dark", props.pallete);

    const getTheme = (colorMode: "light" | "dark" | null | undefined) => {
        if (colorMode === "dark") {
            console.log("colorMode is dark");
            return darkTheme;
        } else {
            console.log("colorMode is light");
            return lightTheme;
        }
    }

    return <NativeBaseProvider theme={getTheme(colorMode)}>
        <SafeAreaProvider>
            <Navigator>
                {props.children}
            </Navigator>
        </SafeAreaProvider>
    </NativeBaseProvider>;
}

RenaissanceProvider.defaultProps = {
    pallete: {
        primary: {
            light: '#c40000',
            dark: '#c40000',
        },
        accent: {
            light: "rgb(255,204,0)",
            dark: "rgb(255,204,0)"
        }
    }
}

export type TRenaissanceProviderProps = {
    children: React.ReactNode;
    colorMode: "light" | "dark";
    pallete: TRenaissanceProviderPallete,
    linking?: LinkingOptions<any>;
}

export type TRenaissanceProviderPallete = {
    primary: {
        light: string;
        dark: string;
    },
    accent: {
        light: string;
        dark: string;
    }
}