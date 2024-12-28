import { ReactElement } from "react";

import { MainLogo, Search } from "@/components";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <MainLogo />
        باما نوبت
      </h1>
      <Search />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
