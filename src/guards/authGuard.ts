"use client";

import { useLocalStorage } from "@/hooks";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";

export function AuthGuard() {
    const { get } = useLocalStorage();

    return get(ACCESS_TOKEN_KEY);
}
