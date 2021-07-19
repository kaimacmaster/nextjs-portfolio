import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavBar.module.css";

type Link = {
  name: string;
  href: string;
};

const NavBar: FunctionComponent = () => {
  const router = useRouter();

  const linkList: Link[] = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
  ];

  const listItems = linkList.map(({ name, href }) => (
    <li className={styles.navbarListItem} key={name.toLowerCase()}>
      <Link href={href}>
        <a className={router.pathname === href ? styles.active : undefined}>
          {name}
        </a>
      </Link>
    </li>
  ));

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>{listItems}</ul>
    </nav>
  );
};

export default NavBar;
