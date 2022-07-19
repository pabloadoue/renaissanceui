import { useState, useEffect } from "react";
import { View, HStack, Text, Button, useColorMode, } from 'native-base';
import { SafeAreaView } from "react-native-safe-area-context";

import { TUIIconName } from './UIIcon';
import { UIButton } from './UIButton';

export function UIHeader(props: TUIHeaderProps) {
    const [bg, setBg] = useState("transparent");
    const { colorMode } = useColorMode();

    useEffect(() => {
        if (props.transparent === true) {
            setBg("transparent");
        } else if (typeof props.bg !== "undefined") {
            if (colorMode === "light") {
                setBg(props.bg.light);
            } else {
                setBg(props.bg.dark);
            }
        }
    }, [colorMode, props.transparent]);

    const left = () => {
        if (!props.saving && typeof props.left !== "undefined") {
            const { label, icon, press } = props.left;
            return <UIButton icon={icon} label={label} onPress={press} />
        }
    }

    const right = () => {
        if (typeof props.right !== "undefined") {
            const { label, icon, press } = props.right;
            return <UIButton icon={icon} label={label} onPress={press} />
        }
    };

    return <View
        width={"100%"}
        bg={bg}
    >
        <SafeArea safeArea={props.safeArea === true}>
            <HStack height={10}>
                <View flex={3} justifyContent="center" alignItems={"flex-start"}>
                    {left()}
                </View>
                <View flex={4} justifyContent="center" alignItems={"center"}>
                    <Text numberOfLines={1} fontWeight="medium" fontSize={16}>{props.title}</Text>
                </View>
                <View flex={3} justifyContent="center" alignItems={"flex-end"}>
                    {right()}
                </View>
            </HStack>
        </SafeArea>
    </View>
}

function SafeArea(props: {
    safeArea: boolean,
    children: JSX.Element | JSX.Element[]
}) {
    if (props.safeArea) {
        return <SafeAreaView edges={["top"]} style={{
            width: "100%"
        }}>
            {props.children}
        </SafeAreaView>
    } else {
        return <>
            {props.children}
        </>
    }
}

UIHeader.defaultProps = {
    safeArea: true
};

export type TUIHeaderProps = {
    title?: string;
    saving?: boolean;
    transparent?: boolean;
    bg?: {
        dark: string;
        light: string;
    },
    shadow?: boolean;
    safeArea?: boolean;
    left?: {
        label?: string;
        icon?: TUIIconName;
        press?: () => void;
    },
    right?: {
        label?: string;
        icon?: TUIIconName;
        press?: () => void;
    }
}