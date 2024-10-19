import type { ReactElement } from 'react'

// Components
import RouteElement from "./RouteElement";

// Hooks
import { validateChildren } from "../hooks/useValidateComponent";

// Context
import GlobalProvider from '../context/GlobalContext';

interface RouterProps {
    children: ReactElement<typeof RouteElement> | ReactElement<typeof RouteElement>[]
}

export default function GlobalRouter({ children }: RouterProps) {

    try {
        validateChildren(children, RouteElement);
    } catch (error) {
        console.error(error);
        return (
            <div style={{ color: "red", fontWeight: "bold" }}>
                Error: {error instanceof Error ? error.message : "An unknown error occurred"}
            </div>
        );
    }

    return (
        <GlobalProvider>
            {children}
        </GlobalProvider>
    )
}