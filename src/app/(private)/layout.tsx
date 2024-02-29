import { Providers } from "@/providers";
import { PrivateHeader, Sidebar, Toaster } from "@/components";
import type { TRootLayout } from "@/app/types";

export default function OraginationLayout({ children }: TRootLayout) {
    return (
        <Providers>
            <div className="flex w-full h-full">
                <Sidebar />
                <div className="flex flex-col flex-auto">
                    <PrivateHeader />
                    {children}
                    <Toaster duration={10000} />
                </div>
            </div>
        </Providers>
    );
}
