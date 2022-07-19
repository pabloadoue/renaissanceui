import { Text, View } from "native-base";
import Base from "./base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Components(props: any) {

    return <Base {...props}>
        <Text>Hola desde adentro</Text>
    </Base>
}