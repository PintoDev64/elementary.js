import { ReactNode, useEffect, useReducer } from "react";

// Context
import { GlobalContext } from "..";

interface GlobalContextProps {
    children: ReactNode
}

interface InitProperties {
    Path: GlobalContext['Path'];
    routerTree: GlobalContext['routerTree'];
}

function funtionalReducer(prevState: InitProperties, { StateToModify, StateValue }: GlobalContext_ReducerProps): InitProperties {
    return {
        ...prevState,
        [StateToModify as string]: StateValue
    }
}

export default function GlobalProvider({ children }: GlobalContextProps) {

    const INIT: InitProperties = {
        Path: window.location.pathname,
        routerTree: null
    }

    const [state, dispatch] = useReducer(funtionalReducer, INIT);

    function changeState(data: GlobalContext_ReducerProps, shouldPushState = true) {

        if (state.Path === data.StateValue) return;

        dispatch(data);

        if (shouldPushState) {
            window.history.pushState({}, '', data.StateValue);
        }
    }

    useEffect(() => {
        const onPopState = () => {
            changeState({ StateToModify: "Path", StateValue: window.location.pathname }, false);
        }

        // Escucha el evento popstate del navegador
        window.addEventListener("popstate", onPopState);

        return () => {
            window.removeEventListener("popstate", onPopState);
        };
    });

    return (
        <GlobalContext.Provider value={{ ...state, changeState }}>
            {children}
        </GlobalContext.Provider>
    );
}