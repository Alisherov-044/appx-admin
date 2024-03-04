"use client";
import { DataTable, DataTableViewOptions } from "@/components";
import { AuthGuard } from "@/guards";
import { Payment, columns } from "./columns";

export default function ProductsPage() {
    AuthGuard("/login");

    const data: Payment[] = [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "a@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "b@example.com",
        },
    ];

    return (
        <main className="container px-3 py-10">
            <DataTable
                columns={columns}
                data={data}
                filterBy={{ placeholder: "Filter emails...", column: "email" }}
            />
        </main>
    );
}
