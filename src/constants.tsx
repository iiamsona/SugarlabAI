import Image from "next/image";
import { SideNavItem } from "@/types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  { type: "section", section: "APP" },
  {
    type: "item",
    title: "Create",
    path: "/create",
    icon: <Image src="/create.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Explore",
    path: "/explore",
    icon: <Image src="/explore.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Chat",
    path: "/chat",
    icon: <Image src="/chat.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Gallery",
    path: "/gallery",
    icon: <Image src="/gallery.svg" alt="Logo" width={22} height={29} />,
  },

  { type: "section", section: "TOKENS" },
  {
    type: "item",
    title: "Tokens",
    path: "/tokens",
    icon: <Image src="/coins.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Coupon",
    path: "/coupon",
    icon: <Image src="/coupon.svg" alt="Logo" width={22} height={29} />,
  },

  { type: "section", section: "OTHERS" },
  {
    type: "item",
    title: "Academy",
    path: "/academy",
    icon: <Image src="/academy.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Affiliates",
    path: "/affiliates",
    icon: <Image src="/affiliates.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Help",
    path: "/help",
    icon: <Image src="/help.svg" alt="Logo" width={22} height={29} />,
  },

  { type: "section", section: "SOCIALS" },
  {
    type: "item",
    title: "Discord",
    path: "/discord",
    icon: <Image src="/discord.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Reddit",
    path: "/reddit",
    icon: <Image src="/reddit.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Instagram",
    path: "/instagram",
    icon: <Image src="/instagram.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "X",
    path: "/x",
    icon: <Image src="/x.svg" alt="Logo" width={22} height={29} />,
  },
  {
    type: "item",
    title: "Telegram",
    path: "/telegram",
    icon: <Image src="/telegram.svg" alt="Logo" width={22} height={29} />,
  },
];
