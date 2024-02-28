import "@/styles/globals.css";
import { siteConfig } from "@/config";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";
import type { Metadata } from "next";
import type { TRootLayout } from "@/app/types";

export const metadata: Metadata = siteConfig;

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: Readonly<TRootLayout>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="system"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
