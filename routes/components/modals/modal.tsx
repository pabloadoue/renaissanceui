import { Text } from "native-base";
import { UIModal } from "../../../src";

export default function (props: Props) {
    return <UIModal open={props.open}>
        <Text>Hello World</Text>

    </UIModal>
}

type Props = {
    open: boolean,
    close: () => void
}