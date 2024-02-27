"use client";
import { usePathname } from "next/navigation";

export function useRouter() {
    const path = usePathname();

    return { path };
}
