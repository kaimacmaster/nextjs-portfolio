import styles from "../styles/site-header.module.css";
import Link from "next/link";

const SiteHeader = ({ links }) => {
  const linkList = links || [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    /* { name: "Blog", href: "/blog" }, */
  ];

  const listItems = linkList.map(({ name, href }) => (
    <li className={styles.navbarListItem} key={name.toLowerCase()}>
      <Link href={href}>
        <a style={{color: "#ffffff"}}>{name}</a>
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
