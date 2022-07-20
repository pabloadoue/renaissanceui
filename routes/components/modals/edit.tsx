import { useState } from "react";
import { Text } from "native-base";
import { UIModalEdit, TFieldsType, UITextInput, UITable } from "../../../src";

export default function (props: Props) {
    const [saving, setSaving] = useState(false);
    const [fields, setFields] = useState<TFieldsType>({
        Name: {
            name: "Name",
            value: "",
            label: "Nombre"
        },
        LastName: {
            name: "LastName",
            value: "",
            label: "Apellido Paterno"
        },
        FamilyName: {
            name: "FamilyName",
            value: "",
            label: "Apellido Materno"
        }
    });

    const submit = (error: any, body: any, fields: any) => {
        if (error) {
            setFields({ ...error })
        } else {
            console.log(body);
            setSaving(true);
            setTimeout(() => {
                setSaving(false);
            }, 2000);
        }
    };
    return <UIModalEdit
        open={props.open}
        fields={fields}
        title={"Modal Edit"}
        update={(fields) => {
            setFields({ ...fields });
        }}
        saving={saving}
        close={props.close}
        submit={submit}
    >
        <UITable label="Datos del Cliente">
            <UITextInput {...fields.Name} />
            <UITextInput {...fields.LastName} />
            <UITextInput {...fields.FamilyName} />
        </UITable>
    </UIModalEdit>
}

type Props = {
    open: boolean,
    close: () => void
}