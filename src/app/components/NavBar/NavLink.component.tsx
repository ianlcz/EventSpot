"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as TLink } from "../../lib/types/link.type";

const NavLink = ({ link }: { link: TLink }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.href}
      className={clsx("px-2 font-medium text-gray-600 dark:text-gray-400", {
        "py-0.5 w-fit bg-gradient-to-br from-primary to-secondary text-white dark:text-white rounded-full":
          pathname === `/${link.href}`,
      })}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
