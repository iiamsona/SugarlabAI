export type SideNavItem =
  | {
      type: "section";
      section: string;
    }
  | {
      type: "item";
      title: string;
      path: string;
      mobileMenu?: true
      subMenuItems?: {
        title: string;
        path: string;
      }[];
    };
