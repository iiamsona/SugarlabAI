"use client";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/types";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="w-[250px] bg-[var(--color-background-primary)] h-screen flex-1 fixed hidden md:flex px-3 overflow-y-auto hide-scrollbar">
      <div className="flex flex-col  w-full">
      <div className="sticky top-0 z-30 bg-[var(--color-background-primary)] w-full">
        <Logo place="sideNav" />
      </div>
        <div className="flex flex-col space-y-2">
          {SIDENAV_ITEMS.map((item, idx) => {
            if (item.type === "section") {
              return (
                <div key={idx}>
                  <div className="w-full h-[0.5px] bg-transparent">
                    <div className="h-[0.5px] bg-[var(--color-grey)] mx-3"></div>
                  </div>
                  <div
                    key={idx}
                    className=" text-xs text-muted-foreground tracking-wider pt-3 text-[var(--color-gray-text)]"
                  >
                    {item.section}
                  </div>
                </div>
              );
            }
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({
  item,
}: {
  item: Extract<SideNavItem, { type: "item" }>;
}) => {
  const pathname = usePathname();

  const isActive = pathname === item.path || pathname.includes(item.path);
  const isCreate = item.path === "/create";

  const variant = isCreate
    ? "primaryMenuRose"
    : isActive
    ? "primaryMenuGray"
    : "ghost";

  return (
    <div className="w-full">
      <Link
        href={
          item.path === "/academy" ? "https://academy.sugarlab.ai/" : item.path
        }
        className="flex justify-center items-center"
      >
        <Button
          menu
          variant={variant}
          size="menuSz"
          iconSrc={`${item.path}.svg`}
        >
          <div className="grid self-center grid-cols-3 w-full">
            <span>{item.title}</span>
            {item.path === "/academy" && (
              <div className="ml-1 text-xs">
                <span className="ml-4 text-xs text-[9px] font-semibold bg-[var(--color-rose)] text-white w-[32px] h-[16px] px-[6px] py-[2px] rounded-xl">
                  New
                </span>
              </div>
            )}
            {item.path === "/academy" && (
              <div className="flex justify-end items-center w-full">
                <Image src="/link.svg" alt="icon" width={16} height={16} />
              </div>
            )}
          </div>
        </Button>
      </Link>
    </div>
  );
};
