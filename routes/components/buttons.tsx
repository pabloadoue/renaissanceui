import React, { useState } from "react";
import { HStack, Text, useTheme, View } from "native-base";
import Base from "./base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { UIButton, UITable, UITextInput, UICurrencyInput } from "../../src";

export default function Components(props: any) {
    const { colors } = useTheme();
    const variants = ["solid", "subtle", "link", "outline", "ghost"];
    const colorSchemes: string[] = ["primary", "accent", "secondary"];

    Object.keys(colors).forEach(key => {
        const color = key as keyof typeof colors;
        if (typeof colors[color]["500"] !== "undefined") {
            if (!colorSchemes.includes(key)) {
                //colorSchemes.push(key);
            }
        }
    });

    const renderVariants = () => {
        return variants.map((variant) => {
            return <UITable label={variant} key={variant}>
                <HStack flex={1} flexWrap={"wrap"} alignItems={"center"} space={2} paddingLeft={2}>
                    {/*@ts-expect-error*/}
                    {buttons(variant, false, false)}
                    {/*@ts-expect-error*/}
                    {buttons(variant, true, false)}
                    {/*@ts-expect-error*/}
                    {buttons(variant, false, true)}
                </HStack>
            </UITable>
        });
    }

    const buttons = (variant: "solid" | "subtle" | "link" | "outline" | "ghost", loading:boolean, disabled:boolean) => {
        return colorSchemes.map((color) => {
            return <View width="30%" marginY={3}>
                <UIButton color={color} variant={variant} label={color} loading={loading} disabled={disabled} />
            </View>
        });
    }

    return <Base {...props}>
        <View width="100%" maxWidth="480" alignSelf={"center"}>

            {renderVariants()}
        </View>
    </Base>
}