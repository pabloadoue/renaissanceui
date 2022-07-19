import { UIIcon, TUIIconName } from "./UIIcon";
import { Button } from "native-base";

export function UIButton(props: TUIButtonProps) {
    const content = () => {
        if (typeof props.label === "string") {
            return props.label;
        } else if (props.icon) {
            return <UIIcon name={props.icon} size={"xl"} />
        }
    };

    return <Button
        variant={props.variant}
        isLoading={props.loading}
        onPress={() => {
            if (typeof props.onPress === "function") {
                props.onPress();
            }
        }}
    >
        {content()}
    </Button>
}

UIButton.defaultProps = {
    variant: "ghost"
}

export type TUIButtonProps = {
    label?: string;
    icon?: TUIIconName;
    loading?: boolean;
    onPress?: () => void;
    variant?: "solid" | "subtle" | "link" | "outline" | "ghost";
}