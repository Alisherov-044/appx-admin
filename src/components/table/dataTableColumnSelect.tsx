import { Checkbox } from "@/components";
import type { CellContext, HeaderContext } from "@tanstack/react-table";

export function DataTableColumnSelect<T>() {
    return {
        header: ({ table }: HeaderContext<T, unknown>) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }: CellContext<T, unknown>) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    };
}
