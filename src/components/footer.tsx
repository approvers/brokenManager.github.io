import type { FC } from "react";
import Link from "next/link";
import styles from "../scss/components/footer.module.scss";

export const Footer: FC = () => (
  <footer className={styles.footerCard}>
    <Link href="/policy">
      <a className={styles.footerLink}>プライバシーポリシー</a>
    </Link>{" "}
    - (c) 2021 Approvers
  </footer>
);
