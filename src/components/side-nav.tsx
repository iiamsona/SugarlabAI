"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SIDENAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/types";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useNavbarStore, useNavbarOpenStore } from "@/store/useNavbarStore";
import { cn } from "@/lib/utils";

const SideNav = () => {
  const settingsItem = SIDENAV_ITEMS.find(
    (item) => item.type === "item" && item.path === "/user"
  );
  const scrollItems = SIDENAV_ITEMS.filter((item) => item !== settingsItem);
  const collapsed = useNavbarStore((state) => state.collapsed);
  const opened = useNavbarOpenStore((state) => state.opened);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHidden = windowWidth !== null ? !opened && windowWidth <= 390 : false;
  const isFlex = windowWidth !== null ? opened || windowWidth > 390 : true;

  return (
    <div
      className={cn(
        "sidenav fixed left-0 top-0 h-screen w-[250px] bg-[var(--color-background-primary)] flex flex-col overflow-hidden px-3 pb-2",
        { "w-[72px] px-1": collapsed },
        {
          hidden: isHidden,
          flex: isFlex,
        }
      )}
    >
      <div className="sticky top-0 z-30 bg-[var(--color-background-primary)] shrink-0">
        <Logo place="sideNav" />
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div
          className={cn("flex flex-col space-y-2", { "space-y-1": collapsed })}
        >
          {scrollItems.map((item, idx) => {
            if (item.type === "section") {
              return (
                <div key={`section-${idx}`}>
                  {!collapsed && (
                    <>
                      <div className="w-full h-[0.5px] bg-transparent">
                        <div className="h-[0.5px] bg-[var(--color-grey)] mx-3"></div>
                      </div>
                      <div className="text-xs text-[var(--color-gray-text)] tracking-wider pt-3">
                        {item.section}
                      </div>
                    </>
                  )}
                </div>
              );
            }
            return <MenuItem key={`item-${idx}`} item={item} />;
          })}
        </div>
      </div>

      {settingsItem && (
        <div className="sticky bottom-0 z-30 bg-[var(--color-background-primary)] w-full border-t border-[var(--color-grey-border)] pt-2 shrink-0">
          <MenuItem
            key="settings"
            item={settingsItem as Extract<SideNavItem, { type: "item" }>}
          />
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

  const collapsed = useNavbarStore((state) => state.collapsed);

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
          variant={collapsed ? variantS : variant}
          size={collapsed ? "sMenu" : "menuSz"}
          iconSrc={`${item.path}.svg`}
          sMenu={collapsed}
          menuNew={item.path === "/academy" && collapsed}
        >
          <div
            className={cn("grid self-center grid-cols-3 w-full", {
              "flex flex-col": collapsed,
            })}
          >
            <span>
              {item.title == "Settings" && collapsed ? "" : item.title}
            </span>
            {item.path === "/academy" && !collapsed && (
              <>
                <div className="text-xs flex justify-start">
                  <span className="new-btn ml-3 text-xs text-[9px] font-semibold bg-[var(--color-rose)] text-white w-[32px] h-[16px] px-[6px] py-[2px] rounded-xl">
                    New
                  </span>
                </div>
                <div className="flex justify-end items-center w-full">
                  <Image src="/link.svg" alt="icon" width={16} height={16} />
                </div>
              </>
            )}
          </div>
        </Button>
      </Link>
    </div>
  );
};
