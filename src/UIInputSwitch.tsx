import { View, Input, Text, HStack, useTheme, Switch } from "native-base";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import numeral from "numeral";

const InputSwitch = (props: TUIInputSwitchProps, ref: any) => {
    const { colors } = useTheme();
    const inputRef = useRef<any>(null);
    const [focused, setFocused] = useState(false);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState("gray4");
    const [labelColor, setLabelColor] = useState(colors.gray2);

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current.focus();
            },
            blur: () => {
                inputRef.current.blur();
            },
            name: props.name,
            disabled: props.disabled,
            value: props.value
        }
    });

    useEffect(() => {
        if (props.borderBottom || props.error) {
            setBorderBottomWidth(0.5);
        } else {
            setBorderBottomWidth(0);
        }
    }, [props.borderBottom, props.error]);

    useEffect(() => {
        if (props.error) {
            setLabelColor(colors.red);
            setBorderBottomColor("red");
        } else if (focused) {
            setLabelColor(colors.blue["500"]);
            setBorderBottomColor("blue.500");
        } else {
            setLabelColor(colors.gray2);
            setBorderBottomColor("gray4");
        }
    }, [props.error, focused]);

    const error = () => {
        if (typeof props.error === "string") {
            return <View width={"100%"}>
                <Text color={"red"}>{props.error}</Text>
            </View>
        }
    }

    const change = (value: boolean) => {
        let resp = {
            name: props.name,
            value: value
        };

        if (props.disabled !== true) {
            if (typeof props.change === "function") {
                props.change(resp);
            } else {
                console.log("No change function defined");
            }
        }
    }



    return <View width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} paddingLeft={0}>
        <View width={"100%"} borderBottomWidth={borderBottomWidth} borderBottomColor={borderBottomColor} paddingY={3}>
            <HStack width="100%" space={2} paddingY={1} alignItems="center">
                <View paddingLeft={4} flex={1}>
                    <Text fontSize={18} color={labelColor}>{props.label}</Text>
                </View>
                <View paddingX={2}>
                    <Switch
                        ref={inputRef}
                        size={"sm"}
                        colorScheme={"green"}
                        value={props.value}
                        onValueChange={change}
                        isDisabled={props.disabled}
                    />
                </View>
            </HStack>
        </View>
        {error()}
    </View>
}

export const UIInputSwitch = forwardRef(InputSwitch)

export type TUIInputSwitchProps = {
    name: string;
    value: boolean;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    error?: string | boolean;
    borderBottom?: boolean;
    change?: (value: { name: string, value: boolean }) => void;
    submit?: () => void;
    next?: (name?: string) => void;
}