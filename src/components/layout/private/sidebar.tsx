"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMenu, useRouter } from "@/hooks";
import { sidebarLinks } from "@/data";
import { useSidebarContext } from "@/context";
import { Icons, collapsible, popover } from "@/components";
import type { FC } from "react";
import type { TIcon } from "@/components/ui/icons";

const { Collapsible, CollapsibleContent, CollapsibleTrigger } = collapsible;
const { Popover, PopoverContent, PopoverTrigger } = popover;

type TSidebarCollapsibleButton = {
    isOpen: boolean;
    isNotCollapsed: boolean;
    title: string;
    Icon: FC<TIcon>;
};

function SidebarCollapsibleButton({
    isOpen,
    isNotCollapsed,
    title,
    Icon,
}: TSidebarCollapsibleButton) {
    return (
        <button className="w-full p-3 overflow-hidden flex items-center justify-between gap-x-1 rounded-md transition-all duration-100 hover:bg-gray-200 dark:hover:bg-slate-900">
            <div className="flex items-center gap-x-4">
                <Icon className="shrink-0" />
                <span
                    className={cn(
                        "transition-all duration-100 opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none",
                        isOpen && "md:opacity-100 md:pointer-events-auto"
                    )}
                >
                    {title}
                </span>
            </div>
            <Icons.arrow.down
                className={cn(
                    "transition-all duration-100 rotate-180 opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none",
                    !isNotCollapsed && "rotate-0",
                    isOpen && "md:opacity-100 md:pointer-events-auto"
                )}
            />
        </button>
    );
}

export function Sidebar() {
    const { path } = useRouter();
    const { isOpen, toggle } = useSidebarContext();
    const { isOpen: isNotCollapsed, toggle: toggleCollapse } = useMenu();

    return (
        <>
            <div
                onClick={toggle}
                className={cn(
                    "hidden md:hidden fixed top-0 left-0 w-screen h-screen bg-black/10 z-10",
                    isOpen && "block"
                )}
            />
            <nav
                className={cn(
                    "fixed top-0 left-0 -translate-x-full md:relative md:translate-x-0 bg-background z-20 w-[300px] md:w-[105px] h-full transition-all duration-100 px-4 py-6 dark:border-r shadow-md",
                    isOpen && "md:w-[300px] translate-x-0"
                )}
            >
                <div className="flex flex-row-reverse items-center justify-between w-full">
                    <button
                        onClick={toggle}
                        className={cn(
                            "py-2 px-6 transition-all rotate-0 md:rotate-180 duration-100",
                            isOpen && "md:rotate-0"
                        )}
                    >
                        <Icons.collapse />
                    </button>
                    <Link
                        href="/"
                        className={cn(
                            "opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none transition-all duration-100",
                            isOpen && "md:opacity-100 md:pointer-events-auto"
                        )}
                    >
                        <Icons.logo />
                    </Link>
                </div>
                <ul className="w-full flex flex-col gap-y-2 px-2 py-4">
                    {sidebarLinks.map(({ id, title, url, children, Icon }) => {
                        if (url)
                            return (
                                <li key={id}>
                                    <Link
                                        href={url}
                                        className={cn(
                                            "w-full p-3 overflow-hidden flex items-center gap-x-4 rounded-md transition-all duration-100 hover:bg-gray-200 dark:hover:bg-slate-900",
                                            (path === url ||
                                                children?.some(
                                                    (child) => child.url === url
                                                )) &&
                                                "bg-gray-200 dark:bg-slate-900"
                                        )}
                                    >
                                        <Icon className="shrink-0" />
                                        <span
                                            className={cn(
                                                "transition-all opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none",
                                                isOpen &&
                                                    "md:opacity-100 md:pointer-events-auto"
                                            )}
                                        >
                                            {title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        if (children)
                            return (
                                <li key={id}>
                                    {isOpen ? (
                                        <Collapsible
                                            onOpenChange={toggleCollapse}
                                        >
                                            <CollapsibleTrigger className="w-full">
                                                <SidebarCollapsibleButton
                                                    isOpen={isOpen}
                                                    isNotCollapsed={
                                                        isNotCollapsed
                                                    }
                                                    title={title}
                                                    Icon={Icon}
                                                />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <ul className="w-full flex flex-col gap-y-2 text-muted-foreground pl-10 mt-2">
                                                    {children.map(
                                                        ({
                                                            id,
                                                            title,
                                                            url,
                                                        }) => (
                                                            <li
                                                                key={id}
                                                                className="hover:underline transition-all duration-150 hover:text-black dark:hover:text-white"
                                                            >
                                                                <Link
                                                                    href={url}
                                                                >
                                                                    {title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <Popover>
                                            <PopoverTrigger className="w-full">
                                                <SidebarCollapsibleButton
                                                    isOpen={isOpen}
                                                    isNotCollapsed={
                                                        isNotCollapsed
                                                    }
                                                    title={title}
                                                    Icon={Icon}
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent
                                                align="start"
                                                className="w-fit"
                                            >
                                                <ul className="w-full flex flex-col gap-y-2 px-4">
                                                    {children.map(
                                                        ({
                                                            id,
                                                            title,
                                                            url,
                                                        }) => (
                                                            <li
                                                                key={id}
                                                                className="hover:underline"
                                                            >
                                                                <Link
                                                                    href={url}
                                                                >
                                                                    {title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </PopoverContent>
                                        </Popover>
                                    )}
                                </li>
                            );
                    })}
                </ul>
            </nav>
        </>
    );
}
