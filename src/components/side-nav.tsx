"use client";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/types";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSidebarStore } from "@/store/useSidebarStore";
import { cn } from "@/lib/utils";

const SideNav = () => {
  const settingsItem = SIDENAV_ITEMS.find(
    (item) => item.type === "item" && item.path === "/user"
  );
  const scrollItems = SIDENAV_ITEMS.filter((item) => item !== settingsItem);
  const collapsed = useSidebarStore((state) => state.collapsed);
  return (
    <div
      className={cn(
        "side-nav w-[250px] bg-[var(--color-background-primary)] h-screen fixed md:flex flex-col px-3 overflow-visible",
        { "w-[72px] px-1": collapsed }
      )}
    >
      <div className="sticky top-0 z-30 bg-[var(--color-background-primary)] w-full">
        <Logo place="sideNav" />
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className={cn("flex flex-col space-y-2", {'space-y-1' : collapsed})}>
          {scrollItems.map((item, idx) => {
            if (item.type === "section") {
              return (
                <div key={`section-${idx}`}>
                 {!collapsed &&
                 <div className="w-full h-[0.5px] bg-transparent">
                    <div className="h-[0.5px] bg-[var(--color-grey)] mx-3"></div>
                  </div>
                 } 
                  {!collapsed && (
                    <div
                      className={cn("text-xs text-muted-foreground tracking-wider pt-3 text-[var(--color-gray-text)]")}
                      key={`section-title-${idx}`}
                    >
                      {item.section}
                    </div>
                  )}
                </div>
              );
            }
            return <MenuItem key={`item-${idx}`} item={item} />;
          })}
        </div>
      </div>
      {settingsItem && (
        <div className="sticky bottom-0 z-30 bg-[var(--color-background-primary)] w-full border-t border-[var(--color-grey-border)] pt-2">
          <MenuItem key="settings" item={settingsItem} />
        </div>
      )}
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

  const collapsed = useSidebarStore((state) => state.collapsed);

  const variant = isCreate
    ? "primaryMenuRose"
    : isActive
    ? "primaryMenuGray"
    : "ghost";

    const variantS = isCreate
    ? "primarySMenuRose"
    : isActive
    ? "primarySMenuGray"
    : "ghostS";

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
          variant={collapsed ? variantS : variant }
          size={collapsed ? "sMenu" : "menuSz"}
          iconSrc={`${item.path}.svg`}
          sMenu={collapsed}
          menuNew={item.path === "/academy" && collapsed}
        >
          <div className={cn("grid self-center grid-cols-3 w-full", {'flex flex-col' : collapsed})}>
            <span>{item.title}</span>
            {item.path === "/academy" && !collapsed && (
              <div className="ml-1 text-xs">
                <span className="ml-4 text-xs text-[9px] font-semibold bg-[var(--color-rose)] text-white w-[32px] h-[16px] px-[6px] py-[2px] rounded-xl">
                  New
                </span>
              </div>
            )}
            {item.path === "/academy" && !collapsed && (
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
