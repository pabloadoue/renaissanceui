import { useState, useEffect } from "react";
import { View, HStack, Text, Button, useColorMode, useColorModeValue } from 'native-base';
import { SafeAreaView } from "react-native-safe-area-context";

import { TUIIconName } from './UIIcon';
import { UIButton } from './UIButton';

export function UIHeader(props: TUIHeaderProps) {
    const [bg, setBg] = useState("transparent");
    const { colorMode } = useColorMode();

    useEffect(() => {
        if (typeof props.bg !== "undefined") {
            if (colorMode === "light") {
                setBg(props.bg.light);
            } else {
                setBg(props.bg.dark);
            }
        }
    }, [colorMode, props.bg]);

    const left = () => {
        if (!props.saving && typeof props.left !== "undefined") {
            const { label, icon, press, leftIcon, rightIcon } = props.left;
            return <UIButton
                icon={icon}
                label={label}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onPress={press}
            />
        }
    }

    const right = () => {
        if (typeof props.right !== "undefined") {
            const { label, icon, press, leftIcon, rightIcon } = props.right;
            return <UIButton
                icon={icon}
                label={label}
                onPress={press}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                loading={props.saving}
            />
        }
    };

    return <View
        width={"100%"}
        bg={props.transparent ? "transparent" : bg}
        shadow={props.shadow ? 1 : -1}
        borderTopRadius={props.borderRadius ? 8 : 0}
    >
        <SafeArea safeArea={props.safeArea === true}>
            <HStack paddingX={2} style={{ height: 60 }}>
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
    safeArea: true,
    borderRadius: false,
    transparent: false
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
    borderRadius?: boolean;
    left?: {
        label?: string;
        icon?: TUIIconName;
        leftIcon?: TUIIconName;
        rightIcon?: TUIIconName;
        press?: () => void;
    },
    right?: {
        label?: string;
        icon?: TUIIconName;
        leftIcon?: TUIIconName;
        rightIcon?: TUIIconName;
        press?: () => void;
    }
}