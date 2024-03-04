"use client";
import { Icons, Input } from "@/components";
import type { Table } from "@tanstack/react-table";

interface DataTableFilterProps<TData> {
    table: Table<TData>;
    placeholder: string;
    column: string;
}

export function DataTableFilter<TData>({
    table,
    placeholder,
    column,
}: DataTableFilterProps<TData>) {
    return (
        <div className="flex items-center py-4">
            <Input
                placeholder={placeholder}
                value={
                    (table.getColumn(column)?.getFilterValue() as string) ?? ""
                }
                prefixIcon={<Icons.search />}
                onChange={(event) =>
                    table.getColumn(column)?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />
        </div>
    );
}
