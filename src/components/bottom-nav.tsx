"use client";
import { usePathname, useRouter } from "next/navigation";
import { useNavbarOpenStore } from "@/store/useNavbarStore";
import { BOTTOMNAV_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";
import { freeUser, premiumUser, type User } from "@/lib/mockData";
import { cn } from "@/lib/utils";

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
        const isGradientTarget =
          item.title === "Tokens" || item.title === "Premium";
        const isReversedPath = pathname === "/tokens" || pathname === "/bolt";

        const gradientDirection = isReversedPath ? "to bottom" : "to top";

        const gradientBackground = `linear-gradient(${gradientDirection}, var(--color-gradient-first), var(--color-gradient-second))`;

        return (
          <Button
            key={item.path}
            variant="ghostNH"
            sMenu
            iconSize="lg"
            iconSrc={`${item.path}.svg`}
            onClick={() => handleClick(item.path)}
            style={{ stroke: '#be123c' }}             className={cn(
              "relative overflow-hidden py-1 [var(--color-rose)]:invert",
              isActive && !isReversedPath
                ? "text-[var(--color-rose)]"
                : "text-[var(--color-natural-text)]"
            )}
          >
            {isGradientTarget && (
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: gradientBackground,
                  zIndex: 0,
                }}
              />
            )}
            <span className="relative z-10">{item.title}</span>
          </Button>
        );
      })}
    </nav>
  );
}
