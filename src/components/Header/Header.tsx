"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./Header.module.css";

export const Header = (): ReactElement => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathname === "/" && styles.active)}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={clsx(pathname === "/" && styles.active)}
            >
              جستجو
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
};
