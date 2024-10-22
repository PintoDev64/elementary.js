import { useContext } from "react"
import { BrowserRoutingContext, LocalRoutingContext } from "../context"

interface locationParams {
    local?: string
}

export default function useLocation() {
    const GlobalContext = useContext(BrowserRoutingContext);
    const LocalContext = useContext(LocalRoutingContext)

    const location = ({ local }: locationParams) => {
        if (GlobalContext === null || LocalContext === null) throw new RangeError("la funcion no se encuentra dentro del contexto del enrutador");

        const ArrayIndex = LocalContext.state.findIndex(({ Name }) => Name === local);

        if (local === undefined) return GlobalContext.Path
        else if (local?.length >= 1) return LocalContext.state[ArrayIndex].Path
    }

    return {
        location
    }
}