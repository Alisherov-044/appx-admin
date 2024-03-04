"use client";
import Link from "next/link";
import { z } from "zod";
import { AuthGuard } from "@/guards";
import { useRouter } from "@/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Icons, Input, form } from "@/components";

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
    email: z.string({ required_error: "email is required" }).email(),
    password: z.string({ required_error: "password is required" }),
    confirm: z.string({ required_error: "confirmation is required" }),
});

export default function SignUpPage() {
    const { redirect } = useRouter();
    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
    });

    // if (AuthGuard()) return redirect("/dashboard");

    function onSubmit(values: z.infer<typeof formScheme>) {
        console.log(values);
    }

    return (
        <main className="flex items-center justify-center flex-auto p-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="px-3 py-6 sm:px-6 sm:py-8 bg-white dark:bg-slate-900 shadow-md rounded-md"
                >
                    <h1 className="text-xl font-normal mb-5">Sign Up</h1>
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
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            prefixIcon={<Icons.email />}
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
                        <FormField
                            control={form.control}
                            name="confirm"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input
                                            password
                                            type="password"
                                            placeholder="Confirm"
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
                    <p className="max-w-[330px] text-center text-sm text-muted-foreground py-3">
                        By signing up, you confirm that you&apos;ve read and
                        accepted our{" "}
                        <span className="text-primary">User Notice</span> and{" "}
                        <span className="text-primary">Privacy Policy.</span>
                    </p>
                    <Button className="w-full mt-5">Sign Up</Button>
                    <span className="inline-block w-full text-center mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-primary font-medium"
                        >
                            Login
                        </Link>
                    </span>
                </form>
            </Form>
        </main>
    );
}
