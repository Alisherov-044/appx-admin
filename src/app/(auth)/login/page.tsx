"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Icons, Input, Label, form } from "@/components";

const {
    Form,
    FormField,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} = form;

const formScheme = z.object({
    username: z.string({ required_error: "username is required" }),
    password: z.string({ required_error: "password is required" }),
});

export default function LoginPage() {
    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
    });

    function onSubmit(values: z.infer<typeof formScheme>) {
        console.log(values);
    }

    return (
        <main className="flex items-center justify-center flex-auto p-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="px-3 py-6 sm:px-6 sm:py-8 bg-white shadow-md rounded-md"
                >
                    <h1 className="text-xl font-normal mb-5">Login</h1>
                    <div className="flex flex-col">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Username"
                                            prefixIcon={<Icons.user />}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input
                                            password
                                            type="password"
                                            placeholder="Password"
                                            prefixIcon={<Icons.lock />}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center gap-x-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Link href="/reset-password" className="text-primary">
                            Forgot Password
                        </Link>
                    </div>
                    <Button className="w-full mt-5">Log In</Button>
                    <span className="inline-block w-full text-center mt-6">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-primary font-medium"
                        >
                            Sign Up
                        </Link>
                    </span>
                </form>
            </Form>
        </main>
    );
}
