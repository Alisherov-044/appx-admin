import "@/styles/globals.css";
import { siteConfig } from "@/config";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import type { TRootLayout } from "@/app/types";

export const metadata: Metadata = siteConfig;

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: Readonly<TRootLayout>) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
