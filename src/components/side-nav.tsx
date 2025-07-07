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
    <div className="w-[250px] bg-[--color-background-primary] h-screen flex-1 fixed hidden md:flex px-3">
      <div className="flex flex-col  w-full">
        <Logo place="sideNav" />
        <div className="flex flex-col space-y-2">
          {SIDENAV_ITEMS.map((item, idx) => {
            if (item.type === "section") {
              return (
                <>
                  <div className="w-full h-[0.5px] bg-transparent">
                    <div className="h-[0.5px] bg-[var(--color-grey)] mx-3"></div>
                  </div>
                  <div
                    key={idx}
                    className=" text-xs text-muted-foreground tracking-wider pt-1 text-[var(--color-gray-text)]"
                  >
                    {item.section}
                  </div>
                </>
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
  href={item.path === '/academy' ? 'https://academy.sugarlab.ai/' : item.path}
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
              <div className="ml-4 text-xs">
                <Button variant={"primaryRose"} size={"newSz"} newBtn>
                  New
                </Button>
              </div>
            )}
          {item.path === "/academy" && (
            <div className="flex justify-end items-center w-full">
              <Image
                src="/link.svg"
                alt="icon"
                width={16}
                height={16}
              />
            </div>
          )}
          </div>
        </Button>
      </Link>
    </div>
  );
};
