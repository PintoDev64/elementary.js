import type { ReactNode } from 'react'

// Context
import {BrowserRoutingProvider} from '../context/BrowserRoutingContext';
import {LocalRoutingProvider} from '../context/LocalRountingProvider';

interface RouterProps {
    children: ReactNode
}

export function BrowserRouting({ children }: RouterProps) {
    return (
        <BrowserRoutingProvider>
            <LocalRoutingProvider>
                {children}
            </LocalRoutingProvider>
        </BrowserRoutingProvider>
    )
}