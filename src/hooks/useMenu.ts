"use client";
import { useState } from "react";

export function useMenu(defaultState?: boolean) {
    const [isOpen, setIsOpen] = useState<boolean>(defaultState ?? false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    return { isOpen, open, close, toggle };
}
