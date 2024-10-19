import type { ReactNode } from 'react'
import { Children, isValidElement } from "react";

export function validateChildren(children: ReactNode, PropElement: unknown | ReactNode) {
    Children.forEach(children, (child) => {
        if (!isValidElement(child)) {
            throw new Error(
                "This value is not a React Component"
            )
        }

        if (child.type !== PropElement) {
            throw new Error(
                `Invalid component found inside Router. ` +
                `Only RouteElement components are allowed.`
            );
        }
    });
};