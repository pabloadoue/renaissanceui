import { View, Input, Text, HStack, useTheme } from "native-base";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import numeral from "numeral";

const CurrencyInput = (props: TUICurrencyInputProps, ref: any) => {
    const { colors } = useTheme();
    const inputRef = useRef<any>(null);
    const [focused, setFocused] = useState(false);
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState("gray4");
    const [labelColor, setLabelColor] = useState(colors.gray2);
    const [value, setValue] = useState("");

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
        let a = numeral(props.value).value();
        let value = "0";
        if (a === null) {
            a = 0;
        }
        if (a % 1 === 0) {
            value = numeral(a).format('$ 0,0');
        } else {
            const decimals = countDecimals(a);
            if (decimals === 1) {
                value = numeral(a).format('$ 0,0[.]0');
            } else if (decimals === 2) {
                value = numeral(a).format('$ 0,0[.]00');
            } else if (decimals === 3) {
                value = numeral(a).format('$ 0,0[.]000');
            } else if (decimals === 4) {
                value = numeral(a).format('$ 0,0[.]0000');
            } else {
                value = numeral(a).format('$ 0,0[.]0000');
            }
        }
        if (typeof props.value === "string") {
            if (props.value.includes(".")) {
                const decimals = props.value.split(".")[1].length;
                if (decimals <= 0) {
                    value = `${value}.`;
                }
            }
        }
        setValue(value);
    }, [props.value]);

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

    const change = (val: string) => {
        let value: number | string | null = numeral(val).value();
        if (value === null) {
            value = 0;
        } else {
            if (val.includes(".")) {
                const decimals = val.split(".")[1].length;
                if (decimals <= 0) {
                    value = `${value}.`;
                }
            }
        }

        if (checkValid(`${value}`)) {
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
    }

    return <View width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} paddingLeft={0}>
        <View width={"100%"} borderBottomWidth={borderBottomWidth} borderBottomColor={borderBottomColor} paddingY={3}>
            <HStack width="100%" space={2} paddingY={1}>
                <View paddingLeft={4}>
                    <Text fontSize={18} color={labelColor}>{props.label}</Text>
                </View>
                <View flex={1}>
                    <Input
                        variant={"unstyled"}
                        size={"xl"}
                        ref={inputRef}
                        textAlign={"right"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        type={"text"}
                        value={typeof props.currency === "string" ? `${props.currency} ${value}` : `${value}`}
                        isDisabled={props.disabled}
                        onChangeText={change}
                        padding={0}
                        paddingRight={4}
                        keyboardType={"number-pad"}
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
            </HStack>
        </View>
        {error()}
    </View>
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

const countDecimals = (input: number) => {
    const value = `${input}`;
    return value.split(".")[1].length || 0;
}

/*UICurrencyInput.defaultProps = {
    disabled: false,
    error: false,
    value: 0
}*/

export const UICurrencyInput = forwardRef(CurrencyInput)

export type TUICurrencyInputProps = {
    name: string;
    value: string | number;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    error?: string | boolean;
    borderBottom?: boolean;
    currency?: "USD" | "MXN" | "EUR" | "GBP" | "JPY" | "AUD" | "NZD" | "CAD" | "COP";
    change?: (value: { name: string, value: string | number }) => void;
    submit?: () => void;
    next?: (name?: string) => void;
    returnKeyType?: "next" | "done" | "go" | "search" | "send";
}