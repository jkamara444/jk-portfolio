"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monogram } from "@/components/ui/Monogram";
import styles from "./SiteHeader.module.css";

/** The monogram that links home; marks itself current while you are on the home page. */
export function HomeLink() {
  const pathname = usePathname();

  return (
    <Link
      className={styles.logo}
      href="/"
      aria-label="JK, home"
      aria-current={pathname === "/" ? "page" : undefined}
    >
      <Monogram />
    </Link>
  );
}
