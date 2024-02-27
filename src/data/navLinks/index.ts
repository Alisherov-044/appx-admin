import { NavLink } from "@/models";
import { authGuard } from "@/shared/guards";

export const publicNavLinks: NavLink[] = [
    new NavLink(1, "Help", "/help"),
    new NavLink(2, "Login", "/login"),
    new NavLink(3, "SignUp", "/signup"),
];

export const privateNavLinks: NavLink[] = [
    new NavLink(1, "Home", "/"),
    new NavLink(2, "Products", "/products"),
];

export const getNavLinks = (): NavLink[] => {
    return authGuard() ? privateNavLinks : publicNavLinks;
};
