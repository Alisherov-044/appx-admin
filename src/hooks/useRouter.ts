"use client";
import { isServer } from "@/utils";
import {
    usePathname,
    useSearchParams,
    useRouter as useNavigation,
} from "next/navigation";

export function useRouter() {
    const path = usePathname();
    const navigation = useNavigation();
    const searchParams = useSearchParams();

    const redirect = (path: string) => {
        if (isServer()) return null;
        navigation.push(path);
    };

    return { path, navigation, searchParams, redirect };
}
