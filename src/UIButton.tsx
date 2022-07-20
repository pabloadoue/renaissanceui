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
        isDisabled={props.disabled}
        colorScheme={props.color}
        size={props.size}
        leftIcon={props.leftIcon && <UIIcon name={props.leftIcon} size={"sm"} />}
        rightIcon={props.rightIcon && <UIIcon name={props.rightIcon} size={"sm"} />}
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
    variant: "ghost",
    color: "primary",
    disabled: false,
    size: "lg"
}

export type TUIButtonProps = {
    label?: string;
    size: "sm" | "md" | "lg";
    icon?: TUIIconName;
    leftIcon?: TUIIconName;
    rightIcon?: TUIIconName;
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    color?: string;
    variant?: "solid" | "subtle" | "link" | "outline" | "ghost";
}