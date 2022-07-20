import { useState } from "react";
import { FlatList, Text, View, HStack, Pressable, useColorMode, useTheme } from "native-base";
import { UIModal } from "../UIModal";
import { UITable } from "../UITable";
import { UIHeader } from "../UIHeader";

import { TUISelectOption } from ".";
import { UIIcon } from "../UIIcon";

export default function UISelectModal(props: Props) {
    const { colorMode } = useColorMode();
    const { colors } = useTheme();
    const [topOffset, setTopOffset] = useState(0);

    return <UIModal open={props.open}>
        <FlatList
            flex={1}
            data={props.options}
            keyExtractor={(item) => `${item.value}`}
            renderItem={({ item, index }) => {
                const borderBottom = index + 1 < props.options.length;
                const selected = item.value === props.value;
                return <ListItem
                    {...item}
                    change={props.change}
                    borderBottom={borderBottom}
                    selected={selected}
                />
            }}
            onScroll={(e) => {
                setTopOffset(e.nativeEvent.contentOffset.y);
            }}
            contentContainerStyle={{
                marginTop: 60,
                marginHorizontal: 20,
                marginBottom: 60,
                borderRadius: 8,
                backgroundColor: colorMode === "light" ? colors.white : colors.gray5
            }}
        />
        <View position="absolute" width="100%">
            <UIHeader
                title={props.title}
                safeArea={false}
                transparent={topOffset <= 0}
                borderRadius={true}
                bg={{
                    light: "white",
                    dark: "gray5"
                }}
                shadow={topOffset > 0}
                left={{
                    label: "Regresar",
                    leftIcon: "chevron-left",
                    press: () => {
                        props.close();
                    }
                }}
            />
        </View>
    </UIModal>
}

const ListItem = (props: ListItemProps) => {
    return <Pressable width="100%" onPress={() => props.change(props.value)}>
        {(params) => {
            const { isPressed, isFocused } = params;
            return <View width={"100%"} borderBottomWidth={props.borderBottom ? .5 : 0} borderBottomColor={"gray4"} paddingY={2}>
                <HStack width="100%" space={2} paddingY={1} justifyContent="center" alignItems={"center"} opacity={isPressed ? .5 : 1}>
                    <View justifyContent="center" paddingLeft={4} flex={1}>
                        <Text fontSize={16} numberOfLines={1}>{props.label}</Text>
                    </View>
                    <View width={10} justifyContent="center" alignItems={"center"}>
                        {props.selected ?
                            <UIIcon name="checkmark" color="blue.500" size="md" />
                            : null}
                    </View>
                </HStack>
            </View>
        }}
    </Pressable>
}

type Props = {
    open: boolean,
    close: () => void,
    title: string,
    change: (value: string | number | null) => void,
    options: TUISelectOption[];
    value: string | number | null;
}

interface ListItemProps extends TUISelectOption {
    borderBottom: boolean;
    change: (value: string | number | null) => void;
    selected: boolean;
}