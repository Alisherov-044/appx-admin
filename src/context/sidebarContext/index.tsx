"use client";
import { useMenu } from "@/hooks";
import { initialState } from "./initial";
import { createContext, useContext } from "react";
import type { TProvider } from "@/context/types";

const sidebarContext = createContext(initialState);
export const useSidebarContext = () => useContext(sidebarContext);

export function SidebarProvider({ children }: TProvider) {
    const { isOpen, toggle } = useMenu();

    return (
        <sidebarContext.Provider value={{ isOpen, toggle }}>
            {children}
        </sidebarContext.Provider>
    );
}
