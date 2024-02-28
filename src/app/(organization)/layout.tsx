import { Providers } from "@/providers";
import { PrivateHeader, Sidebar } from "@/components";
import type { TRootLayout } from "@/app/types";

export default function OraginationLayout({ children }: TRootLayout) {
    return (
        <Providers>
            <div className="flex w-full h-full">
                <Sidebar />
                <div className="flex-auto">
                    <PrivateHeader />
                    {children}
                </div>
            </div>
        </Providers>
    );
}
