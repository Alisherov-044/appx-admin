"use client";
import { useState } from "react";

export function useMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    return { isOpen, open, close, toggle };
}
