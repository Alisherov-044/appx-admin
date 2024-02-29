"use client";
import { useLocalStorage, useRouter } from "@/hooks";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";

export function AuthGuard(redirectUrl?: string) {
    const { redirect } = useRouter();
    const { get } = useLocalStorage();

    if (redirectUrl) {
        return redirect(redirectUrl);
    }

    return get(ACCESS_TOKEN_KEY);
}
