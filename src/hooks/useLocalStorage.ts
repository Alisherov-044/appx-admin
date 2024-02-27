"use client";

export function useLocalStorage() {
    const get = <T>(key: string): T | false => {
        if (typeof window !== "undefined") {
            const value = localStorage.getItem(key);
            return typeof value === "string" && JSON.parse(value);
        } else {
            return false;
        }
    };

    const set = <T>(key: string, value: T) => {
        return localStorage.setItem(key, JSON.stringify(value));
    };

    return { get, set };
}
