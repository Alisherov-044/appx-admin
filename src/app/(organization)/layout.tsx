import { PrivateHeader } from "@/components";
import type { TRootLayout } from "@/app/types";

export default function OraginationLayout({ children }: TRootLayout) {
    return (
        <div>
            <PrivateHeader />
            {children}
        </div>
    );
}
