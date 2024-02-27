"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    prefixIcon?: React.ReactNode;
    password?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, prefixIcon, password = false, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState<boolean>(false);

        const toggle = () => setShowPassword((prev) => !prev);

        return (
            <span
                className={cn(
                    "flex items-center justify-between h-12 w-full rounded-md border border-input bg-transparent px-4 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
            >
                <div className="flex items-center gap-x-2">
                    {prefixIcon && prefixIcon}
                    <input
                        type={
                            password
                                ? showPassword
                                    ? "text"
                                    : "password"
                                : type
                        }
                        ref={ref}
                        className="flex-auto h-full bg-transparent outline-none"
                        {...props}
                    />
                </div>
                {password &&
                    (showPassword ? (
                        <Icons.eye
                            onClick={toggle}
                            className="cursor-pointer"
                        />
                    ) : (
                        <Icons.eyeClose
                            onClick={toggle}
                            className="cursor-pointer"
                        />
                    ))}
            </span>
        );
    }
);
Input.displayName = "Input";

export { Input };
