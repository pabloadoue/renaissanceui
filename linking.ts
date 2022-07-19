import {
    LinkingOptions,
    NavigatorScreenParams,
    getStateFromPath,
    getPathFromState
} from "@react-navigation/native";

export default function Linking() {
    const result: LinkingOptions<RootStackParamList> = {
        prefixes: [],
        config: {
            screens: {
                components: {
                    path: "components",
                    screens: {
                        Home: {
                            path: "home"
                        },
                        Pallete: {
                            path: "pallete"
                        },
                        Inputs: {
                            path: "inputs"
                        },
                        Modals: {
                            path: "modals"
                        }
                    }
                }
            }
        }
    }
    return result;
}

type RootStackParamList = {
    components: undefined;
}

type AccountsStackParamList = {
    all: undefined,
    active: undefined,
    opportunity: undefined
}

type SettingsStackParamList = {
    agencies: undefined,
    companies: undefined,
    users: undefined,
    branches: undefined
}
