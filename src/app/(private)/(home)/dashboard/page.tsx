"use client";
import { toast } from "sonner";
import { AuthGuard } from "@/guards";
import { Button } from "@/components";

export default function DashboardPage() {
    AuthGuard("/login");

    return (
        <main>
            <Button onClick={() => toast.warning("warning!")}>
                show toast
            </Button>
        </main>
    );
}
