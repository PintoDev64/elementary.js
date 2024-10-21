import { useContext } from "react";
import type { ReactNode } from 'react';

// Context
import { LocalRoutingContext } from "../context";

interface LocalRouteElementProps {
    context: string;
    path: string;
    component: ReactNode;
}

export default function LocalRoute({ context, path, component }: LocalRouteElementProps): ReactNode {
    const Context = useContext(LocalRoutingContext);

    if (Context === null) return null;
    const { state } = Context

    const dataIndex = state.findIndex(({ Name }) => Name === context);

    if (state[dataIndex].Path !== path) return null;

    return component
}