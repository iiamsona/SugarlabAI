import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";

export interface LogoProps {
  place?: "header" | "sideNav" | "mobile";
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ place = "header" }, ref) => {
    const collapsed = useSidebarStore((state) => state.collapsed);
    const toggle = useSidebarStore((state) => state.toggle);
    return (
      <div ref={ref}>
        <div className="flex h-[60px] justify-center">
          <Link
            href="/"
            className={cn(
              "flex flex-row space-x-2 justify-center",
              {
                "md:hidden p-3": place == "header",
              },
              {
                "md:justify-start w-full h-[60px] p-3": place == "sideNav",
              },
              {
                "lg:hidden md:hidden sm:flex sm:justify-center": collapsed,
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
              className={cn(
                "rounded-lg cursor-pointer",
                { "mr-3": !collapsed },
                { "rotate-180": collapsed }
              )}
              onClick={toggle}
            />
          )}
        </div>
        {place == "sideNav" && (
          <div className="w-full h-[0.5px] bg-transparent">
            <div
              className={cn(
                "h-[0.5px] bg-[var(--color-grey)]",
                { "mx-3": !collapsed },
                { "mx-1": collapsed }
              )}
            ></div>
          </div>
        )}
      </div>
    );
  }
);

Logo.displayName = "Logo";
