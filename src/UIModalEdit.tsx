import { useState, useRef } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from "native-base";

import { UIModal, TUIModalProps } from "./UIModal";
import { FormHandler, TFormHandlerProps, TFormHandlerType } from "./FormHandler";
import { UIHeader } from "./UIHeader";

export function UIModalEdit(props: TUIModalEditProps) {
    const [topOffset, setTopOffset] = useState(0);
    const form = useRef<TFormHandlerType>(null);

    return <UIModal open={props.open}>
        <View flex={1} borderRadius={8}>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingTop: 60,
                    paddingBottom: 40
                }}
                extraHeight={200}
                onScroll={(e) => {
                    setTopOffset(e.nativeEvent.contentOffset.y);
                }}
            >
                <FormHandler
                    fields={props.fields}
                    submit={props.submit}
                    update={props.update}
                    saving={props.saving}
                    ref={form}
                >
                    {props.children}
                </FormHandler>
            </KeyboardAwareScrollView>
        </View>
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
                saving={props.saving}
                shadow={topOffset > 0}
                left={{
                    label: "Cancelar",
                    press: () => {
                        props.close();
                    }
                }}
                right={{
                    label: "Continuar",
                    press: () => {
                        if (form.current) {
                            form.current.submit();
                        }
                    }
                }}
            />
        </View>
    </UIModal>
}

export interface TUIModalEditProps extends TUIModalProps, TFormHandlerProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
    close: () => void;
}