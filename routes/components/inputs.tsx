import { useState } from "react";
import { Text, View } from "native-base";
import Base from "./base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { FormHandler, TFieldsType, UITable, UITextInput, UICurrencyInput, UISelect, UIInputSwitch } from "../../src";

export default function Components(props: any) {
    const [fields, setFields] = useState<TFieldsType>({
        Text1: {
            name: "Text1",
            value: "",
            label: "Text Input",
            type: "text",
        },
        Text2: {
            name: "Text2",
            value: "",
            label: "Text Input Disabled",
            type: "text",
            disabled: true,
        },
        Text3: {
            name: "Text3",
            value: "",
            label: "Text Input Error",
            error: "Error message to be shown on the text field",
            type: "text",
        },
        Password1: {
            name: "Password1",
            value: "",
            label: "Password Input",
            type: "password"
        },
        Password2: {
            name: "Password2",
            value: "My Password My Password 123451234",
            label: "Password Input Error",
            type: "password",
            error: "Error message to be shown on the text field"
        },
        Email1: {
            name: "Email1",
            value: "",
            label: "Email Input",
            type: "email"
        },
        Email2: {
            name: "Email2",
            value: "foo@var.com",
            label: "Password Input Error",
            type: "email",
            error: "Error message to be shown on the text field"
        },
        Currency1: {
            name: "Currency1",
            value: 0,
            label: "Currency Input"
        },
        Currency2: {
            name: "Currency2",
            value: 0,
            label: "Currency Input Locale",
            currency: "MXN"
        },
        Select1: {
            name: "Select1",
            value: null,
            label: "Select With Inputs",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" },
                { label: "Option 4", value: "Option 4" }
            ]
        },
        Select2: {
            name: "Select2",
            value: null,
            label: "Select Disabled",
            disabled: true,
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" },
                { label: "Option 4", value: "Option 4" }
            ]
        },
        Select3: {
            name: "Select3",
            value: null,
            label: "Select Loading",
            loading: true,
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" },
                { label: "Option 4", value: "Option 4" }
            ]
        },
        Select4: {
            name: "Select4",
            value: null,
            label: "Select Error",
            error: "Error message to be shown on the text field",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" },
                { label: "Option 4", value: "Option 4" }
            ]
        },
        Switch1: {
            name: "Switch1",
            value: false,
            label: "Switch Input"
        },
        Switch2: {
            name: "Switch2",
            value: false,
            disabled: true,
            label: "Switch Input Disabled"
        }
    });

    return <Base {...props}>
        <View width="100%" maxWidth="480" alignSelf={"center"}>
            <FormHandler
                fields={fields}
                update={(fields) => {
                    setFields({ ...fields });
                }}>
                <UITable label="Text Input">
                    <UITextInput {...fields.Text1} />
                    <UITextInput {...fields.Text2} />
                    <UITextInput {...fields.Text3} />
                </UITable>
                <UITable label="Password Input">
                    <UITextInput {...fields.Password1} />
                    <UITextInput {...fields.Password2} />
                </UITable>

                <UITable label="Email Input">
                    <UITextInput {...fields.Email1} />
                    <UITextInput {...fields.Email2} />
                </UITable>

                <UITable label="Currency Input">
                    <UICurrencyInput {...fields.Currency1} />
                    <UICurrencyInput {...fields.Currency2} />
                </UITable>
                <UITable label="Select Input">
                    <UISelect {...fields.Select1} />
                    <UISelect {...fields.Select2} />
                    <UISelect {...fields.Select3} />
                    <UISelect {...fields.Select4} />
                </UITable>
                <UITable label="Switch Input">
                    <UIInputSwitch {...fields.Switch1} />
                    <UIInputSwitch {...fields.Switch2} />
                </UITable>
            </FormHandler>
        </View>
    </Base>
}