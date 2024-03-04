"use client";
import { DataTableColumnHeader, DataTableColumnSelect } from "@/components";
import type { ColumnDef } from "@tanstack/react-table";

export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        ...DataTableColumnSelect(),
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
];
