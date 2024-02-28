import { Icons } from "@/components";
import { SidebarLink } from "@/models";

export const sidebarLinks: SidebarLink[] = [
    new SidebarLink(1, "Dashboard", Icons.home, "/dashboard"),
    new SidebarLink(2, "Products", Icons.products, undefined, [
        {
            id: 1,
            title: "Add Product",
            url: "/products/add",
        },
        {
            id: 2,
            title: "Product List",
            url: "/products",
        },
        {
            id: 3,
            title: "Categories",
            url: "/categories",
        },
    ]),
    new SidebarLink(3, "Orders", Icons.cart, "/cart"),
    new SidebarLink(4, "Customers", Icons.customers, "/customers"),
];
