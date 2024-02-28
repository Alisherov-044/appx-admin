export { ThemeProvider } from "./themeProvider";

import { SidebarProvider } from "@/context";
import { TProvider } from "@/context/types";

export function Providers({ children }: TProvider) {
    return <SidebarProvider>{children}</SidebarProvider>;
}
