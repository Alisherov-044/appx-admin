"use client";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "@/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, form } from "@/components";
import { AuthGuard } from "@/guards";

const {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} = form;

const formScheme = z.object({
    name: z.string({ required_error: "name is required" }),
    description: z.string().optional(),
    image: z.string({ required_error: "image is required" }),
    price: z.number({ required_error: "price is required" }),
    category: z.number({ required_error: "category is required" }),
});

const products = [
    {
        id: 1,
        name: "macbook pro",
        image: "./images/img.png",
        price: 1200,
        category: 1,
    },
];

export default function ProductsForm() {
    AuthGuard("/login");

    const { searchParams } = useRouter();
    const productId = Number(searchParams.get("product"));
    const editProduct = products.find((product) => product.id === productId);

    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            ...editProduct,
        },
    });

    function onSubmit(values: z.infer<typeof formScheme>) {
        console.log(values);
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res("Product Created Successfully");
                // rej("error");
            }, 2000);
        });

        toast.promise(promise, {
            loading: "loading...",
            success: "Product Created Successfully!",
            error: "Error accured while creating product!",
        });

        promise.finally(() => form.reset());
    }

    return (
        <main className="flex-auto flex justify-center">
            <div className="flex flex-col gap-y-10 w-full max-w-[650px] mt-4 sm:mt-10 p-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl sm:text-3xl">Create Product</h1>
                    <Button variant="outline" onClick={() => form.reset()}>
                        Discard
                    </Button>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-y-3 px-3 py-5 sm:p-7 bg-white shadow-md rounded dark:bg-transparent dark:border"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Name"
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
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Description"
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
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Image"
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
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Price"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>
                            <Button>Submit item</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </main>
    );
}
