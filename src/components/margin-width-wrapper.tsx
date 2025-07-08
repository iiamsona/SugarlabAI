"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const collapsed = useSidebarStore((state) => state.collapsed);
  return (
    <div className={cn("flex flex-col md:ml-[250px] sm:border-r sm:border-zinc-700 min-h-screen", {'md:ml-[72px]' : collapsed})}>
      {children}
    </div>
  );
}
