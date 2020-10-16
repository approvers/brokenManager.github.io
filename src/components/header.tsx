import { FC } from "react";
import Link from "next/link";
import { Button } from "./button";
import styles from "../scss/components/header.module.scss";

const links: { name: string; url: string }[] = [
  {
    name: "ホーム",
    url: "/",
  },
  {
    name: "メンバー",
    url: "/member",
  },
  {
    name: "ブログ",
    url: "/blog",
  },
  {
    name: "参加方法",
    url: "/join",
  },
  {
    name: "当サイトについて",
    url: "/policy",
  },
];
export const Header: FC = () => (
  <>
    <header className={styles.headerLayout}>
      <div className={styles.buttonWrapper}>
        {links.map(({ name, url }) => (
          <Link key={name} href={url}>
            <Button>
              <a>{name}</a>
            </Button>
          </Link>
        ))}
      </div>
    </header>
  </>
);
