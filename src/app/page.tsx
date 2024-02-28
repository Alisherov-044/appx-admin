"use client";

import { AuthGuard } from "@/guards";
import { useRouter } from "@/hooks";

export default function HomePage() {
    const { redirect } = useRouter();

    return AuthGuard() ? redirect("/dashboard") : redirect("/dashboard");
}
