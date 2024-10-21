import { useContext, useEffect } from "react";
import type { ReactNode } from 'react'
import { LocalRoutingContext } from "../context";

interface LocalRouterProps {
    identifier: string;
    children: ReactNode;
}

export default function LocalRounting({ identifier, children }: LocalRouterProps) {
    const Context = useContext(LocalRoutingContext);

    if (Context === null) throw new RangeError("El componente no esta dentor d eun contexto Local");
    if (identifier === undefined || identifier.length === 0) throw new Error("No se asigno un nombre para este enrutador \nLa propiedad 'identifier' no ha sido definida");

    useEffect(() => {
        Context.changeState({
            StateIdentifier: identifier,
            StateValue: '/'
        })
    }, [])

    if (Context.state.find(({ Name }) => Name === identifier) === undefined) return null;

    return (
        <>
            {children}
        </>
    )
}