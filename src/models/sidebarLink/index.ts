import type { FC } from "react";
import type { TIcon } from "@/components/ui/icons";

export type TSidebarChild = {
    id: number;
    title: string;
    url: string;
};

export class SidebarLink {
    constructor(
        public id: number,
        public title: string,
        public Icon: FC<TIcon>,
        public url?: string,
        public children?: TSidebarChild[]
    ) {}
}
