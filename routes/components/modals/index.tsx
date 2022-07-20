import React, { useState } from "react";
import { HStack, Text, useTheme, View } from "native-base";
import Base from "../base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { UIButton, UITable, UITextInput, UICurrencyInput } from "../../../src";

import Modal from "./modal";
import Edit from "./edit";

export default function Modals(props: any) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(true);
    const { colors } = useTheme();

    return <>
        <Base {...props}>
            <View width="100%" maxWidth="480" alignSelf={"center"}>

                <UITable label="Modals">
                    <HStack flex={1} flexWrap={"wrap"} alignItems={"center"} space={2} paddingY={2} paddingX={2}>
                        <View width="100%">
                            <UIButton label={"Open Modal"} onPress={() => setModalOpen(true)} />
                        </View>
                        <View width="100%">
                            <UIButton label={"Open Modal Edit"} onPress={() => setModalEditOpen(true)} />
                        </View>
                    </HStack>
                </UITable>
            </View>
        </Base>
        <Modal open={modalOpen} close={() => setModalOpen(false)} />
        <Edit open={modalEditOpen} close={() => setModalEditOpen(false)} />
    </>
}