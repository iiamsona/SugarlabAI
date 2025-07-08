"use client";

import { usePathname, useRouter } from "next/navigation";
import { useNavbarStore } from "@/store/useNavbarStore";
import { BOTTOMNAV_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  isPremium: boolean;
  isLoggedIn: boolean;
}

export function BottomNav({ isPremium, isLoggedIn }: BottomNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const toggle = useNavbarStore((state) => state.toggle);

  const visibleItems = BOTTOMNAV_ITEMS.filter((item) => {
    if (!isLoggedIn && item.path !== "/explore") return false;
    if (item.premium && !isPremium) return false;
    if (item.nonPremium && isPremium) return false;
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
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 h-[64px] flex justify-around items-center z-50 px-2">
      {visibleItems.map((item) => {
        const isActive = pathname === item.path;
        const buttonClass = cn(
            "text-white",
            {
              "text-[var(--color-rose)] fill-[var(--color-rose)]": isActive,
              "text-white fill-white": !isActive,
            }
          );
        return (
          <Button
            key={item.path}
            variant="ghost"
            sMenu
            iconSize="lg"
            iconSrc={`${item.path}.svg`}
            onClick={() => handleClick(item.path)}
          >
            {item.title}
          </Button>
        );
      })}
    </nav>
  );
}
