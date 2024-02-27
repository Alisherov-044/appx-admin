import { PublicHeader } from "@/components";
import type { TRootLayout } from "@/app/types";

export default function AuthLayout({ children }: TRootLayout) {
    return (
        <div className="w-full h-full flex flex-col">
            <PublicHeader />
            {children}
        </div>
    );
}
