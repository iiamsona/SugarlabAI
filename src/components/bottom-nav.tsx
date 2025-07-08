"use client";

import { usePathname, useRouter } from "next/navigation";
import { useNavbarOpenStore } from "@/store/useNavbarStore";
import { BOTTOMNAV_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";
import { freeUser, premiumUser, type User } from "@/lib/mockData";

interface BottomNavProps {
  isPremium: boolean;
  isLoggedIn: boolean;
}

export function BottomNav({}: BottomNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const toggle = useNavbarOpenStore((state) => state.toggle);

  const user: User = freeUser; //test

  const visibleItems = BOTTOMNAV_ITEMS.filter((item) => {
    if (item && !user.isLoggedIn) return false;
    if (item.premium && !user.isPremium) return false;
    if (item.nonPremium && user.isPremium) return false;
    return true;
  });

  const handleClick = (itemPath: string) => {
    if (itemPath === "/user") {
      toggle();
    } else {
      router.push(itemPath);
    }
  };

  return (
    <nav className="bottomnav hidden fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 h-[64px] justify-around items-center z-50 px-2 sm:hidden">
      {visibleItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Button
            key={item.path}
            variant="ghostNH"
            sMenu
            iconSize="lg"
            iconSrc={`${item.path}.svg`}
            onClick={() => handleClick(item.path)}
            className={isActive ? "text-white" : "text-zinc-400"}
          >
            {item.title}
          </Button>
        );
      })}
    </nav>
  );
}
