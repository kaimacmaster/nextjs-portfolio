import styles from "@/components/site-header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const SiteHeader = ({ links }) => {
  const router = useRouter();

  const linkList = links || [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    /* { name: "Blog", href: "/blog" }, */
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

export default SiteHeader;
