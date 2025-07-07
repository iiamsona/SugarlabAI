import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface LogoProps {
  place?: "header" | "sideNav" | "mobile";
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ place = "header" }, ref) => {
    return (
      <div ref={ref}>
        <Link
          href="/"
          className={cn(
            "flex flex-row space-x-3 items-center justify-center",
            {
              "md:hidden p-3": place == "header",
            },
            {
              "md:justify-start w-full h-[60px] p-3": place == "sideNav",
            }
          )}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={22}
            height={29}
            className="rounded-lg"
          />
          <span className="flex font-semibold text-2xl leading-8">
            Sugarlab
          </span>
        </Link>
      </div>
    );
  }
);

Logo.displayName = "Logo";
