import { useContext } from "react"

// Contexts
import { BrowserRoutingContext } from "../context";

export default function useRouter() {
    const GlobalContext = useContext(BrowserRoutingContext);

    const globalStructure = () => {
        if (GlobalContext === null) throw new RangeError("No se encuentra dentro del contexto");

        return GlobalContext.Path
    }

    return {
        globalStructure
    }
}