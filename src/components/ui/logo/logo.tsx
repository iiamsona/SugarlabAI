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
        <div className="flex">
          <Link
            href="/"
            className={cn(
              "flex flex-row space-x-2 justify-center",
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
          {place == "sideNav" && (
            <Image
              src="/open.svg"
              alt="Logo"
              width={22}
              height={29}
              className="rounded-lg mr-3"
            />
          )}
        </div>
        {place == "sideNav" && (
          <div className="w-full h-[0.5px] bg-transparent">
            <div className="h-[0.5px] bg-[var(--color-grey)] mx-3"></div>
          </div>
        )}
      </div>
    );
  }
);

Logo.displayName = "Logo";
