import { Icons, Input } from "@/components";

export function Header() {
    return (
        <header>
            <Input prefixIcon={<Icons.search />} />
            <div>
                <Icons.sun />
                <Icons.bell />
            </div>
        </header>
    );
}
