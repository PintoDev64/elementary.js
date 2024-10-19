import { ReactElement, useContext, type ReactNode } from "react";

// Context
import { GlobalContext } from "../context";

interface RouteElementProps {
    path: string;
    component: ReactNode;
    children?: ReactElement<typeof RouteElement> | ReactElement<typeof RouteElement>[] | null
}

export default function RouteElement({ path, component }: RouteElementProps): ReactNode {
    const { Path } = useContext(GlobalContext);

    if (Path !== path) return null

    return component
}