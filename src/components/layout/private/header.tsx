"use client";
import Link from "next/link";
import { theme } from "@/data";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useSidebarContext } from "@/context";
import { Icons, Input, avatar, popover } from "@/components";
import type { ReactNode } from "react";

const { Avatar, AvatarImage, AvatarFallback } = avatar;
const { Popover, PopoverContent, PopoverTrigger } = popover;

export function Header() {
    const { isOpen, toggle } = useSidebarContext();
    const { setTheme, theme: currentTheme, systemTheme } = useTheme();

    const themeIcons: Record<string, ReactNode> = {
        light: <Icons.sun />,
        dark: <Icons.moon />,
        system: systemTheme === "dark" ? <Icons.moon /> : <Icons.sun />,
    };

    return (
        <header className="w-full flex items-center justify-between p-4 shadow dark:border-b">
            <div className="flex items-center gap-x-2 shrink">
                <button className="p-2 md:hidden" onClick={toggle}>
                    <Icons.collapse
                        className={cn("rotate-180", isOpen && "rotate-0")}
                    />
                </button>
                <Input
                    className="border-none w-full max-w-[200px]"
                    placeholder="Search"
                    prefixIcon={<Icons.search />}
                />
            </div>
            <div className="flex items-center gap-x-5 px-4">
                <Popover>
                    <PopoverTrigger>
                        <button className="mt-1.5">
                            {currentTheme && themeIcons[currentTheme]}
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="center" className="p-2 w-auto">
                        <ul className="flex flex-col gap-y-2 w-full">
                            {theme.map(({ id, type }) => (
                                <li key={id} className="w-full">
                                    <button
                                        className={cn(
                                            "w-full capitalize text-start px-4 py-1 rounded-sm transition-all hover:bg-gray-200 dark:hover:bg-slate-800",
                                            currentTheme === type &&
                                                "bg-gray-200 dark:bg-slate-800"
                                        )}
                                        onClick={() => setTheme(type)}
                                    >
                                        {type}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <button className="relative mt-1.5">
                            <Icons.bell />
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-0.5 right-0" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="center" className="w-auto py-2">
                        <span className="text-sm text-muted-foreground">
                            no notifacations
                        </span>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <button className="flex items-center gap-x-1">
                            <Avatar>
                                <AvatarImage src="" alt="avatar" />
                                <AvatarFallback>
                                    <Icons.avatar />
                                </AvatarFallback>
                            </Avatar>
                            <Icons.arrow.down />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-auto py-2">
                        <Link
                            href="/logout"
                            className="text-sm text-muted-foreground hover:underline"
                        >
                            Log Out
                        </Link>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    );
}
