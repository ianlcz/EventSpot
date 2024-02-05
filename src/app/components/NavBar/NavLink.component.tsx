"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as TLink } from "../../lib/definitions";

const NavLink = ({ link }: { link: TLink }) => {
  const pathname: string = usePathname();

  return (
    <Link
      href={link.href}
      className={clsx(
        "px-2 py-0.5 w-fit font-medium text-gray-600 rounded-full",
        {
          "bg-gradient-to-br from-primary to-secondary text-white hover:text-white dark:text-white dark:hover:text-white":
            pathname === link.href,
          "hover:text-blue-700 dark:text-gray-400 hover:bg-blue-100":
            pathname !== link.href,
        },
      )}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
