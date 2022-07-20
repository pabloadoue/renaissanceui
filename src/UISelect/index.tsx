import { View, Text, HStack, useTheme, Pressable, Spinner } from "native-base";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { UIIcon, TUIIconName } from "../UIIcon";
import { Platform } from "react-native";
//@ts-ignore
import checkConditions from "json-conditions";

import Modal from "./modal";

const Select = (props: TUISelectProps, ref: any) => {
    const { colors } = useTheme();
    const inputRef = useRef<any>(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const [options, setOptions] = useState<TUISelectOption[]>([]);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState("gray4");
    const [labelColor, setLabelColor] = useState(colors.gray2);

    useEffect(() => {
        if (typeof props.loading !== "undefined") {
            setLoading(props.loading);
        }
    }, [props.loading]);

    useEffect(() => {
        if (typeof props.options !== "undefined") {
            setOptions(props.options);
        }
    }, [props.options]);

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                if (Platform.OS === "web") {
                    inputRef.current.focus();
                }
            },
            blur: () => {
                if (Platform.OS === "web") {

                    inputRef.current.blur();
                }
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
            return <View width={"100%"} paddingX={4}>
                <Text color={"red"}>{props.error}</Text>
            </View>
        }
    }

    const change = (value: string | number | null) => {
        let resp = {
            name: props.name,
            value: value
        };

        setTimeout(() => {
            setOpen(false);
        }, 200);

        if (props.disabled !== true) {
            if (typeof props.change === "function") {
                props.change(resp);
            } else {
                console.log("No change function defined");
            }
        }
    }

    const value = () => {
        let result = '';
        options.map((option) => {
            if (option.value === props.value) {
                result = option.label;
            }
        });

        return result;
    }

    const right = () => {
        if (loading) {
            return <HStack width="100%" space={1} justifyContent="flex-end" alignItems={"center"}>
                <View paddingRight={2} justifyContent="center" alignItems={"center"}>
                    <Spinner />
                </View>
            </HStack>
        } else {
            return <HStack width="100%" space={1} justifyContent="center">
                <View flex={1} alignItems="flex-end" justifyContent="center">
                    <Text fontSize={18} color="gray" numberOfLines={1}>{value()}</Text>
                </View>
                <View paddingRight={2} justifyContent="center">
                    <UIIcon name="chevron-right" size="lg" color="gray" />
                </View>
            </HStack>
        }
    }

    return <>
        <View width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} paddingLeft={0}>
            <View width={"100%"} borderBottomWidth={borderBottomWidth} borderBottomColor={borderBottomColor} paddingY={3}>
                <Pressable
                    width="100%"
                    isDisabled={props.disabled || loading}
                    isFocusVisible={false}
                    ref={inputRef}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onPress={() => {
                        if (!props.disabled && !loading) {
                            setOpen(true);
                        }
                    }}>
                    {(params) => {
                        const { isPressed, isFocused } = params;
                        return <HStack width="100%" space={2} paddingY={1} justifyContent="center" alignItems="center" opacity={props.disabled || isPressed ? .5 : 1}>
                            <View justifyContent="center" paddingLeft={4}>
                                <Text fontSize={18} numberOfLines={1} color={labelColor}>{props.label}</Text>
                            </View>
                            <View flex={1}>
                                {right()}
                            </View>
                        </HStack>
                    }}
                </Pressable>
            </View>
            {error()}
        </View>
        <Modal
            open={open}
            title={props.label}
            options={options}
            change={change}
            value={props.value}
            close={() => setOpen(false)}
        />
    </>
}

const checkValid = (input: string | null) => {
    if (typeof input === "string") {
        if (input.length > 0) {
            const re = /^[0-9.]+$/;
            if (!re.test(input)) {
                return false;
            }
        } else {
            return true;
        }
    }

    return true;
};

export const UISelect = forwardRef(Select)

export type TUISelectProps = {
    name: string;
    value: string | number | null;
    disabled?: boolean;
    required?: boolean;
    label: string;
    error?: string | boolean;
    borderBottom?: boolean;
    loading?: boolean;
    options?: TUISelectOption[];
    fields?: any;
    change?: (value: { name: string, value: string | number | null }) => void;
    submit?: () => void;
}

export type TUISelectOption = {
    label: string;
    value: string | number | null;
    icons?: TUIIconName;
};