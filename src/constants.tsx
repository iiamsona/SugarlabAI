import { SideNavItem, BottomNavItem } from "@/types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  { type: "section", section: "APP" },
  {
    type: "item",
    title: "Create",
    path: "/create",
  },
  {
    type: "item",
    title: "Explore",
    path: "/explore",
  },
  {
    type: "item",
    title: "Chat",
    path: "/chat",
  },
  {
    type: "item",
    title: "Gallery",
    path: "/gallery",
  },

  { type: "section", section: "TOKENS" },
  {
    type: "item",
    title: "Tokens",
    path: "/tokens",
  },
  {
    type: "item",
    title: "Coupon",
    path: "/coupon",
  },

  { type: "section", section: "OTHERS" },
  {
    type: "item",
    title: "Academy",
    path: "/academy",
  },
  {
    type: "item",
    title: "Affiliates",
    path: "/affiliates",
  },
  {
    type: "item",
    title: "Help",
    path: "/help",
  },

  { type: "section", section: "SOCIALS" },
  {
    type: "item",
    title: "Discord",
    path: "/discord",
  },
  {
    type: "item",
    title: "Reddit",
    path: "/reddit",
  },
  {
    type: "item",
    title: "Instagram",
    path: "/instagram",
  },
  {
    type: "item",
    title: "X",
    path: "/x",
  },
  {
    type: "item",
    title: "Telegram",
    path: "/telegram",
  },
  {
    type: "item",
    title: "Settings",
    path: "/user",
  },
];

export const BOTTOMNAV_ITEMS: BottomNavItem[] = [
  {
    title: "Explore",
    path: "/explore",
  },
  {
    title: "Chat",
    path: "/chat",
  },
  {
    title: "Create",
    path: "/create",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Premium",
    path: "/bolt",
    nonPremium: true,
  },
  {
    title: "Tokens",
    path: "/tokens",
    premium: true,
  },
  {
    title: "Menu",
    path: "/user",
  },
]