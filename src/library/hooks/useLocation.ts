import { useContext } from "react"
import { BrowserRoutingContext } from "../context"

export function useLocation() {

    const Context = useContext(BrowserRoutingContext)

    const location = () => {
        if (Context === null) {
            throw new RangeError("la funcion no se encuentra dentro del contexto del enrutador")
        }

        return Context.Path
    }

    return {
        location
    }
}