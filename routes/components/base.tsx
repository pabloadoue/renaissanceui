import { View, Text, useColorMode } from "native-base";
import { useRoute } from '@react-navigation/native';
import { UIHeader } from "../../src";

export default function Base(props: any) {
    const { colorMode, setColorMode } = useColorMode();
    const { route, navigation } = props;

    const toggleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
        props.setColorMode(colorMode === "light" ? "dark" : "light");
    }

    return <View height="100%" width="100%">
        <UIHeader
            title={route.name}
            safeArea={true}
            bg={{
                light: "white",
                dark: "gray5"
            }}
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
};