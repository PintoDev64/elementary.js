import { useReducer, type ReactNode } from "react";

// Context
import { LocalRoutingContext } from "..";

// --------------------------------------------------------|
import funtionalReducer from "./reducer";

interface LocalRoutingProviderProps {
    children: ReactNode
}

/**
 * 
 */
export default function LocalRoutingProvider({ children }: LocalRoutingProviderProps) {

    const INIT: LocalRoutingContext['state'] = []

    const [state, dispatch] = useReducer(funtionalReducer, INIT);

    function changeState(data: LocalRouting_ReducerProps) {
        let location: number;

        if (state.length === 0) {
            dispatch(data);
            return;
        } else {
            location = state.findIndex(
                ({ Name }) => Name === data.StateIdentifier
            );
        }

        if (state[location].Path === data.StateValue) return;

        dispatch(data);
    }

    return (
        <LocalRoutingContext.Provider value={{ state, changeState }}>
            {children}
        </LocalRoutingContext.Provider>
    )
}