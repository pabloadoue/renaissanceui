import React, { useState } from "react";
import { HStack, Text, useTheme, View } from "native-base";
import Base from "./base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { UIButton, UITable, UITextInput, UICurrencyInput } from "../../src";

export default function Components(props: any) {
    const { colors } = useTheme();
    const variants = ["solid", "subtle", "link", "outline", "ghost"];
    const palletes: string[] = ["primary", "accent", "secondary"];
    const shades = ["500", "400", "300", "200", "100", "50"];

    Object.keys(colors).forEach(key => {
        const color = key as keyof typeof colors;
        if (typeof colors[color]["500"] !== "undefined") {
            if (!palletes.includes(key)) {
                palletes.push(key);
            }
        }
    });

    const renderPalletes = () => {
        return palletes.map((pallete) => {
            return <View width="30%" marginY={3}>
                <Text>{pallete}</Text>
                {renderShades(pallete)}
            </View>
        });
    }

    const renderShades = (pallete: string) => {
        return shades.map((shade) => {
            return <View bg={`${pallete}.${shade}`}>
                <Text>{shade}</Text>
            </View>
        })
    }

    return <Base {...props}>
        <View width="100%" maxWidth="480" alignSelf={"center"}>

            <UITable label="palletes">
                <HStack flex={1} flexWrap={"wrap"} alignItems={"center"} space={2} paddingLeft={2}>
                    {renderPalletes()}
                </HStack>
            </UITable>
        </View>
    </Base>
}