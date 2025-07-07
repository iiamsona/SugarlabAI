export type SideNavItem =
  | {
      type: "section";
      section: string;
    }
  | {
      type: "item";
      title: string;
      path: string;
      icon: React.ReactNode;
      subMenuItems?: {
        title: string;
        path: string;
      }[];
    };
