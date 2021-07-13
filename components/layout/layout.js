import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";

const name = "Kai Macmaster";
export const siteTitle = "Kai Macmaster";

function BackLink(props) {
  const backlink = props.backlink;
  let link = "/";
  let title = "home";

  if (backlink) {
    link += backlink;
    title = backlink;
  }

  return (
    <div className={styles.backToHome}>
      <Link href={link}>
        <a>← Back to {title}</a>
      </Link>
    </div>
  );
}

export default function Layout({ children, home, backlink }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A full-stack web developer, proficient in all stages of development including dev-ops, front-end,
          back-end, architecture and web design."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <BackLink backlink={backlink} />}
    </div>
  );
}
