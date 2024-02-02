import { ReactElement } from "react";

export type Link = {
  name: string;
  href: string;
  icon?: string | ReactElement;
};
