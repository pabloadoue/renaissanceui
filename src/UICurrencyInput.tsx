import { View, Input, Text, HStack } from "native-base";
import { useState, useEffect } from "react";
import numeral from "numeral";

export function UICurrencyInput(props: TUICurrencyInputProps) {
    const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);
    const [borderBottomColor, setBorderBottomColor] = useState("gray4");
    const [value, setValue] = useState("");

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
        if (props.error) {
            setBorderBottomWidth(0.5);
            setBorderBottomColor("red");
        } else if (props.borderBottom) {
            setBorderBottomWidth(0.5);
            setBorderBottomColor("gray4");
        } else {
            setBorderBottomWidth(0);
            setBorderBottomColor("gray4");
        }
    }, [props.borderBottom, props.error]);

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
                    <Text fontSize={18} color="gray">{props.label}</Text>
                </View>
                <View flex={1}>
                    <Input
                        variant={"unstyled"}
                        size={"xl"}
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

UICurrencyInput.defaultProps = {
    disabled: false,
    error: false,
    value: 0
}

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
}