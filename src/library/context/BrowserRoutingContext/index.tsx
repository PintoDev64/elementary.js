import { useReducer, useEffect } from "react";
import type { ReactNode } from 'react'

// Context
import { BrowserRoutingContext } from '..'

// Utils
import { getActualLocation } from "../../utils";

// --------------------------------------------------------|
import funtionalReducer from "./reducer";
import { EventsName } from "../../constants";

interface BrowserRoutingProviderProps {
    children: ReactNode
}

/**
 * 
 */
export function BrowserRoutingProvider({ children }: BrowserRoutingProviderProps) {
    const INIT: GlobalRouting_InitProperties = {
        Path: getActualLocation()
    }

    const [state, dispatch] = useReducer(funtionalReducer, INIT);

    function changeState(data: GlobalRouting_ReducerProps, shouldPushState = true) {

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
        window.addEventListener(EventsName.popState, onPopState);

        return () => {
            window.removeEventListener(EventsName.popState, onPopState);
        };
    });

    return (
        <BrowserRoutingContext.Provider value={{ ...state, changeState }}>
            {children}
        </BrowserRoutingContext.Provider>
    );
}