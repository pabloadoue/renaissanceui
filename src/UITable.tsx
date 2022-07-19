import React, {
    ReactChild,
    useImperativeHandle,
    forwardRef,
    useState
} from 'react';
import { View, Text } from "native-base";

export function UITable(props: TUITableProps) {

    const content = (children: any, index?: number) => {
        if (typeof children !== "undefined") {
            if (typeof children.map === "function") {
                return children.map((child: any, index: number) => {
                    return React.cloneElement(child, {
                        children: children,
                        borderBottom: index === children.length - 1 ? false : true,
                        key: index
                    });
                });
            } else {
                const child = children;
                return React.cloneElement(child, {
                    children: children,
                    borderBottom: false,
                    key: index
                });
            }
        }
    }

    const label = () => {
        if (typeof props.label === "string") {
            return <View width="100%" paddingX={4} paddingY={1}>
                <Text color="gray" numberOfLines={1} textTransform="uppercase">{props.label}</Text>
            </View>
        }
    }

    return <View width="100%" padding={4}>
        {label()}
        <View width="100%" _light={{ bg: "white" }} _dark={{ bg: "gray5" }} borderRadius={10} paddingBottom={1}>
            {content(props.children, 0)}
        </View>
    </View>
}

export type TUITableProps = {
    children?: JSX.Element | JSX.Element[];
    label?: string;
}