import React, {
    ReactChild,
    useImperativeHandle,
    forwardRef,
    useState
} from 'react';

import uuid from 'react-native-uuid';

//@ts-expect-error
import find from "find-value";
//@ts-expect-error
import iterate from "object-deep-iteration";
//@ts-expect-error
import setval from "setval";


import validator from "./Validator";

export const Handler = (props: TFormHandlerProps, ref: any) => {
    let { fields } = props;

    const [id, setId] = useState(uuid.v4());

    //const [hydrated, setHydrated] = useState(uuid.v4());

    const change = (e: { name: string, value: any, error: any }) => {
        let result = ChangeHandler(e, fields);
        fields = {
            ...fields,
            ...result
        }
        if (typeof props.update === "function") {
            props.update(fields);
        }
        //setHydrated(uuid.v4());
    }

    const submit = () => {
        const { skipValidation } = props;
        const { response, error, valid } = fieldsSubmit(fields, skipValidation);

        if (typeof props.submit === "function") {
            if (valid) {
                props.submit(null, response, fields);
            } else {
                props.submit(error, response, fields);
            }
        }
    }

    function fieldsSubmit(fields: fields, skipValidation: boolean | undefined) {
        let response = {}
        let valid = true;

        iterate(fields, (object: any, path: any) => {
            const field = FindField(fields, path);
            if (field) {
                const isValid = validateField(field, fields);
                if (skipValidation !== true) {
                    if (isValid === true) {
                        field.error = false;
                    } else {
                        valid = false;
                        field.error = isValid;
                    }
                }
                setval(response, path, field.value, ".");
            }
        });

        return { valid: valid, error: fields, response: response };
    }

    useImperativeHandle(ref, () => ({
        change: change,
        submit: submit
    }));

    const content = (children: [], index?: number): any => {
        if (typeof children !== "undefined" && children !== null) {
            if (typeof children.map === "function") {
                return children.map((child: any | ReactChild, index: number) => {
                    return content(child, index);
                });
            } else {
                const child = children;
                if (React.isValidElement(child)) {
                    let children = null;
                    if (typeof props.children !== "undefined") {
                        //@ts-expect-error
                        children = content(child.props.children);
                    }
                    let key = `${id}.${index}`;
                    if (typeof child.props !== "undefined") {
                        //@ts-expect-error
                        if (typeof child.props.name !== "undefined" && typeof child.props.name === "string" && child.props.name !== "undefined") {
                            //@ts-expect-error
                            key = `${id}.${child.props.name}`;
                        }
                    }
                    if (props.saving === true) {

                        return React.cloneElement(child, {
                            //@ts-expect-error
                            children: children,
                            change: change,
                            fields: fields,
                            disabled: true,
                            key: index
                        });
                    } else {
                        return React.cloneElement(child, {
                            //@ts-expect-error
                            children: children,
                            change: change,
                            fields: fields,
                            key: index
                        });
                    }
                } else {
                    return child;
                }
            }
        } else {
            return null;
        }
    };

    return content(props.children, 0);
}

export const ChangeHandler = (e: { name: string, value: any, error: any }, fields: fields) => {
    const field = FindField(fields, e.name);
    if (field) {
        field.value = e.value;
        field.error = e.error;
    }

    return fields;
}

export function validateField(field: field, fields: fields): boolean | string {
    let result: boolean | string = true;
    if (typeof field.validate !== "undefined") {
        field.validate.map((rule) => {
            if (result === true) {
                let { check, pass, fail, params } = rule;
                let validate = true;

                if (validate) {
                    if (typeof check === "function") {
                        const valid = check(field.value, fields, params);
                        if (valid === true) {
                            result = pass;
                        } else {
                            result = fail;
                        }
                    } else if (typeof check === "string") {
                        const name = check as keyof typeof validator;
                        if (typeof validator[name] === "function") {
                            //@ts-expect-error
                            const valid = validator[name](`${field.value}`, params);
                            if (valid === true) {
                                result = pass;
                            } else {
                                result = fail;
                            }
                        } else {
                            result = `Validation function ${check} is not defined`;
                        }
                    } else {
                        result = `Validation function ${check} is not defined`;
                    }
                }
            }
        });
    }
    return result;
}

export function FindField(fields: fields, name: string): FindFieldReturn {
    let field = find(fields, name);
    if (typeof field !== "undefined" && field !== null && typeof field.value !== "undefined" && typeof field.name !== "undefined") {
        return field;
    }
    return null;
}

export const FormHandler = forwardRef(Handler);

export type TFormHandlerType = {
    change: (e: { name: string, value: any, error: any }) => void,
    submit: () => void
}

export type TFormHandlerProps = {
    saving?: boolean,
    fields: fields,
    skipValidation?: boolean | undefined,
    submit?: (error: any, body: Object, fields: Object) => void,
    update?: (fields: any) => void,
    children: any
}

interface fields {
    [key: string]: any
}

type field = {
    name: string,
    value: any | any[],
    label?: string,
    error?: boolean | string,
    disabled?: boolean,
    validate?: Array<TValidationRule>,
    fields?: fields
};

export type TFieldsType = fields;
export type TFieldType = field;

type parsedField = [key: string, value: any];

type FindFieldReturn = field | null;
export type TValidationRule = {
    check: string | ValidationRuleCheckType;
    pass: any,
    fail: any,
    params?: any
};

type ValidationRuleCheckType = (value: any, fields: any, params?: any) => boolean | string;
