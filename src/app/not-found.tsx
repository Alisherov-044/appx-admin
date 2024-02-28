import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

export default function NotFoundPage() {
    return (
        <main className="w-full h-full flex flex-col items-center justify-center">
            <Image
                src="/not-found.svg"
                width={335}
                height={235}
                alt="not found img"
            />
            <h1 className="text-xl font-normal mt-8">Oops! Page not found</h1>
            <p className="max-w-[580px] text-center text-muted-foreground text-sm leading-5 font-normal mt-3 mb-8">
                It&apos;s looking like you may have taken a wrong turn.
                Don&apos;t worry... it happens to the best of us. Here&apos;s a
                little tip that might help you get back on track.
            </p>
            <Link href="/">
                <Button>Back to main</Button>
            </Link>
        </main>
    );
}
