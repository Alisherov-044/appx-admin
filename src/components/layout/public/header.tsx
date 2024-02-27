"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data";
import { useMenu, useRouter } from "@/hooks";
import { Button, Icons } from "@/components";

export function Header() {
    const { getNavLinks } = navLinks;
    const { path } = useRouter();
    const { isOpen, toggle } = useMenu();

    return (
        <header className="relative w-full bg-white flex items-center justify-between py-4 px-4 md:px-10 max-w-[2000px] mx-auto shadow-md">
            <Link href="/login">
                <Icons.logo />
            </Link>
            <ul
                className={cn(
                    "absolute z-30 -right-full -bottom-0.5 translate-y-full transition-all duration-300 bg-white shadow sm:shadow-none w-[300px] h-screen border-l sm:border-none p-5 sm:p-0 flex flex-col sm:relative sm:bg-transparent sm:bottom-0 sm:translate-x-0 sm:translate-y-0 sm:w-fit sm:h-fit sm:flex-row sm:items-center sm:right-0 sm:transition-none gap-y-3 gap-x-6",
                    isOpen && "right-0"
                )}
            >
                {getNavLinks().map(({ id, url, title }) => (
                    <li key={id}>
                        <Link
                            href={url}
                            className={cn(
                                "text-muted-foreground font-semibold transition-all hover:text-primary",
                                path === url && "text-primary"
                            )}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Button
                variant="outline"
                size="sm"
                className="sm:hidden"
                onClick={toggle}
            >
                <Icons.burger />
            </Button>
        </header>
    );
}
