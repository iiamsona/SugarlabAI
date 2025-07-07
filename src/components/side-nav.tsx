"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/types";
import { Icon } from "@iconify/react";
import { Logo } from "./ui/logo";

const SideNav = () => {
    return (
      <div className="w-60 bg-[--color-background-primary] h-screen flex-1 fixed hidden md:flex">
        <div className="flex flex-col space-y-6 w-full">
          <Logo place="sideNav" />
          <div className="flex flex-col space-y-2">
            {SIDENAV_ITEMS.map((item, idx) => {
              if (item.type === "section") {
                return (
                  <div
                    key={idx}
                    className="px-4 text-xs text-muted-foreground tracking-wider pt-1 text-[var(--color-gray-text)]"
                  >
                    {item.section}
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

const MenuItem = ({ item }: { item: Extract<SideNavItem, { type: "item" }> }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const isActive = pathname === item.path || pathname.includes(item.path);

  return (
    <div>
      {item.subMenuItems ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover:bg-[var(--color-grey)] w-full justify-between
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="flex font-medium text-xs leading-4">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={subItem.path}
                  className={`${
                    subItem.path === pathname ? "font-bold" : ""
                  } text-sm`}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 mx-3 rounded-xl hover:bg-[var(--color-grey-border)] hover:border hover:border-[var(--color-grey)] ${
            isActive ? "bg-[var(--color-grey-border)] border border-[var(--color-grey)]" : ""
          }
          ${
            item.path === '/create' ? "bg-[var(--color-rose)] hover:bg-[var(--color-rose)] hover:border-0" : ""
          } 
          `}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
