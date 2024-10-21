import { createContext } from "react";

export const BrowserRoutingContext = createContext<GlobalRoutingContext | null>(null);
export const LocalRoutingContext = createContext<LocalRoutingContext | null>(null)