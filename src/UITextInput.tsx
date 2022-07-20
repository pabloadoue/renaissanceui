import { View, Input, Text, useTheme } from "native-base";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Animated } from "react-native";
import { UIIcon } from "./UIIcon";

const TextInput = (props: TUITextInputProps, ref: any) => {
    const inputRef = useRef<any>(null);
    const { colors } = useTheme();
    const [focused, setFocused] = useState(false);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState("gray4");
    const [labelColor, setLabelColor] = useState(colors.gray2);
    const labelSize = useRef(new Animated.Value(20)).current;
    const labelTop = useRef(new Animated.Value(22)).current;

    useEffect(() => {
        if (props.borderBottom || props.error) {
            setBorderBottomWidth(0.5);
        } else {
            setBorderBottomWidth(0);
        }
    }, [props.borderBottom, props.error]);

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
        if (focused || props.value.length > 0) {
            Animated.timing(labelSize, {
                toValue: 12,
                duration: 200,
                useNativeDriver: false
            }).start();

            Animated.timing(labelTop, {
                toValue: 6,
                duration: 200,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(labelSize, {
                toValue: 18,
                duration: 200,
                useNativeDriver: false
            }).start();

            Animated.timing(labelTop, {
                toValue: 20,
                duration: 200,
                useNativeDriver: false
            }).start();
        }
    }, [props.value, focused]);

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

    const errorIcon = () => {
        if (props.error) {
            return <View position="absolute" right={0} top={2}>
                <UIIcon name="exclamation-circle" color="red" size="4xl" />
            </View>
        }
    }

    const change = (value: string) => {
        if (checkValid(props.type, value)) {
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
        } else {
            console.log("Not valid");
        }
    }

    const label = () => {
        return <Animated.Text style={{
            position: "absolute",
            fontSize: labelSize,
            left: 16,
            top: labelTop,
            color: labelColor
        }}>
            {props.label}
        </Animated.Text>
        //return <Text position="absolute" left={4} top={1} color={labelColor} fontSize={12}>{props.label}</Text>
    }

    return <View width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} paddingLeft={0}>
        <View width={"100%"} borderBottomWidth={borderBottomWidth} borderBottomColor={borderBottomColor} paddingTop={4} paddingBottom={1}>
            {label()}
            <Input
                variant={"unstyled"}
                ref={inputRef}
                size={"xl"}
                autoCapitalize={"none"}
                type={props.type === "password" ? "password" : "text"}
                value={`${props.value}`}
                isDisabled={props.disabled}
                onChangeText={change}
                padding={0}
                paddingLeft={4}
                paddingRight={8}
                paddingTop={2}
                paddingBottom={2}
                keyboardType={
                    props.type === "password" ? "default"
                        : props.type === "email" ? "email-address"
                            : props.type === "number" ? "number-pad"
                                : props.type === "phone" ? "phone-pad"
                                    : props.type === "url" ? "url"
                                        : props.type === "uri" ? "url" : "default"
                }
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                returnKeyType={props.returnKeyType}
                onSubmitEditing={() => {
                    if (typeof props.next === "function") {
                        props.next(props.name);
                    }
                }}
            />
        </View>
        {error()}
    </View>
}

export const UITextInput = forwardRef(TextInput);

const checkValid = (type: "email" | "password" | "number" | "phone" | "text" | "search" | "decimal" | "url" | "uri" | undefined, input: string) => {
    if (type === "email") {
        if (input.length > 0) {
            const re = /^[a-zA-Z0-9.@\-_]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === "number") {
        if (input.length > 0) {
            const re = /^[0-9]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === "decimal") {
        if (input.length > 0) {
            const re = /^[0-9.-]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === "phone") {
        if (input.length > 0) {
            const re = /^[0-9+]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    } else if (type === "uri") {
        if (input.length > 0) {
            const re = /^[a-zA-Z0-9.\-_]+$/;
            if (!re.test(input)) {
                return false;
            }
        }
    }

    return true;
};

UITextInput.defaultProps = {
    disabled: false,
    error: false
}

export type TUITextInputProps = {
    name: string;
    value: string;
    disabled?: boolean;
    required?: boolean;
    type?: "email" | "password" | "number" | "phone" | "text" | "decimal" | "search" | "url" | "uri";
    label?: string;
    error?: string | boolean;
    borderBottom?: boolean;
    change?: (value: { name: string, value: string }) => void;
    submit?: () => void;
    next?: (name?: string) => void;
    returnKeyType?: "next" | "done" | "go" | "search" | "send";
}