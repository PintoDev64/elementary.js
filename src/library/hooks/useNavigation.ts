import { useContext } from "react"

// Context
import { BrowserRoutingContext, LocalRoutingContext } from "../context"

export function useNavigation() {
    const GlobalContext = useContext(BrowserRoutingContext);
    const LocalContext = useContext(LocalRoutingContext);

    if (GlobalContext === null || LocalContext === null) {
        throw new RangeError()
    }

    const { changeState: ChangeGlobal } = GlobalContext
    const { changeState: ChangeLocal } = LocalContext

    function navigate(path: string, local?: string) {
        if (local === undefined) {
            ChangeGlobal({ StateToModify: "Path", StateValue: path })
        } else if (local?.length >= 1) {
            ChangeLocal({ StateIdentifier: local, StateValue: path })
        }
    }

    return {
        navigate,
        location
    }
}