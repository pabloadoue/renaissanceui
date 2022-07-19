import { View, Text, useColorMode } from "native-base";
import { UIHeader } from "../../src";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Base(props: any) {
    const { colorMode, setColorMode } = useColorMode();
    const { route, navigation } = props;

    const toggleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
        props.setColorMode(colorMode === "light" ? "dark" : "light");
    }

    return <View height="100%" width="100%">
        <View flex={1}>
            <KeyboardAwareScrollView style={{
                flex: 1
            }}
                contentContainerStyle={{
                    paddingTop: 40,
                    paddingBottom: 20
                }}
                extraHeight={200}
            >
                <SafeAreaView style={{}}>
                    {props.children}
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </View>
        <View position="absolute" width="100%">
            <UIHeader
                title={route.name}
                safeArea={true}
                bg={{
                    light: "white",
                    dark: "gray5"
                }}
                shadow={true}
                left={{
                    icon: "all",
                    press: () => {
                        navigation.openDrawer();
                    }
                }}
                right={{
                    icon: "lightbulb",
                    press: () => {
                        toggleColorMode();
                    }
                }}
            />
        </View>
    </View>
};