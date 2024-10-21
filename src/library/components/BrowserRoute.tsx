import { useContext } from "react";
import type { ReactNode } from 'react'
import { BrowserRoutingContext } from "../context";

// Context

interface RouteElementProps {
    path: string;
    component: ReactNode;
}

export default function BrowserRoute({ path, component }: RouteElementProps): ReactNode {
    const Context = useContext(BrowserRoutingContext);

    if (Context === null) {
        throw new RangeError()
    }

    if (Context.Path !== path) return null

    return component
}