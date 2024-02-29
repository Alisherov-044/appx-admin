"use client";
import { AuthGuard } from "@/guards";

export default function ProductsPage() {
    AuthGuard("/login");

    return <main></main>;
}
