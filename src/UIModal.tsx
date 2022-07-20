import { View, Text, HStack, Spinner, NativeBaseProvider, useColorModeValue, Modal, VStack, Button } from "native-base";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function UIModal(props: TUIModalProps) {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const { width } = useWindowDimensions();
    const modalSize = width >= 768 ? "xl" : "full";
    const padding = width >= 768 ? 8 : 0;

    useEffect(() => {
        if (props.open) {
            setOpen(true);
            setTimeout(() => {
                setModalOpen(true);
            }, 100);
        } else {
            setModalOpen(false);
            setTimeout(() => {
                setOpen(false);
            }, 200);
        }
    }, [props.open]);

    if (open) {
        return <Modal
            isOpen={modalOpen}
            size={modalSize}
            avoidKeyboard={false}
            animationPreset={props.animation || "slide"}
        >
            <SafeAreaView edges={width >= 768 ? ["top", "bottom"] : ["top"]} style={{
                flex: 1,
                width: "100%"
            }}>
                <View flex={1} width={"100%"} justifyContent={"center"} alignItems={"center"} padding={padding}>
                    <View bg={"gray6"} flex={1} width={"100%"} maxWidth={768} borderRadius={8}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    } else {
        return null;
    }
}

UIModal.defaultProps = {
    animation: "slide",
    transparent: true,
    shadow: false
};

export type TUIModalProps = {
    open: boolean;
    children?: JSX.Element | JSX.Element[];
    animation?: "fade" | "slide";
}