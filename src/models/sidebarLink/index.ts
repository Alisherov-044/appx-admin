import type { FC } from "react";
import type { TIcon } from "@/components/ui/icons";

export class SidebarLinkChild {
    constructor(public id: number, public title: string, public url: string) {}
}

export class SidebarLink {
    constructor(
        public id: number,
        public title: string,
        public Icon: FC<TIcon>,
        public url?: string,
        public children?: SidebarLinkChild[]
    ) {}
}
