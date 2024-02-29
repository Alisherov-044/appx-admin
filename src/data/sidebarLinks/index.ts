import { Icons } from "@/components";
import { SidebarLink, SidebarLinkChild } from "@/models";

export const sidebarLinks: SidebarLink[] = [
    new SidebarLink(1, "Dashboard", Icons.home, "/dashboard"),
    new SidebarLink(2, "Products", Icons.products, undefined, [
        new SidebarLinkChild(1, "Add Product", "/products/form"),
        new SidebarLinkChild(2, "Product List", "/products"),
        new SidebarLinkChild(3, "Categories", " /categories"),
    ]),
    new SidebarLink(3, "Orders", Icons.cart, "/cart"),
    new SidebarLink(4, "Customers", Icons.customers, "/customers"),
];
