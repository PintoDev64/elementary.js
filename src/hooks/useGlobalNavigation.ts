import { useContext } from "react"

// Context
import { GlobalContext } from "../context"

export default function useGlobalNavigation() {
    const { changeState } = useContext(GlobalContext);

    function navigate(path: string) {
        changeState({ StateToModify: "Path", StateValue: path })
    }

    return {
        navigate,
        location
    }
}