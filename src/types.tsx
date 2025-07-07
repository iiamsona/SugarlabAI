export type SideNavItem =
  | {
      type: "section";
      section: string;
    }
  | {
      type: "item";
      title: string;
      path: string;
      subMenuItems?: {
        title: string;
        path: string;
      }[];
    };
