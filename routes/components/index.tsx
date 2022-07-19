import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorMode, useTheme } from 'native-base';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

import Home from "./home";
import Inputs from "./inputs";

export default function Components(props: any) {
    const { setColorMode } = props;
    const { colorMode } = useColorMode();
    const { colors } = useTheme();
    const { width } = useWindowDimensions();
    const drawerBg = colorMode === "light" ? colors.white : colors.gray5;


    return <Drawer.Navigator screenOptions={{
        drawerType: width >= 768 ? "permanent" : "front",
        headerShown: false,
        drawerStyle: {
            backgroundColor: drawerBg
        }
    }}>
        <Drawer.Screen name="Home">
            {(props) => <Home {...props} setColorMode={setColorMode} />}
        </Drawer.Screen>
        <Drawer.Screen name="Inputs">
            {(props) => <Inputs {...props} setColorMode={setColorMode} />}
        </Drawer.Screen>
    </Drawer.Navigator>
};