import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden">
      <div className="mx-auto w-full text-center md:max-w-[242px] max-w-[472px]">
        <h1>ERROR</h1>
        <Image src="/images/error/404.svg" alt="404" width={472} height={152} />
        <Image
          src="/images/error/404-dark.svg"
          alt="404"
          width={472}
          height={152}
        />
        <p className="mt-10 mb-6 text-lg text-gray-700 dark:text-gray-400 md:text-base">
          The page you are looking for does not exist. It might have been moved
          or deleted.
        </p>
        <Button variant="outline" asChild>
          <Link href="/" className="no-underline">
            Back to Home Page
          </Link>
        </Button>
      </div>
    </main>
  );
}
