import React, { FunctionComponent } from "react";
import { siteTitle, siteDescription } from "@/lib/constants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import NavBar from "@/components/common/NavBar";
const BackLink = dynamic(() => import("@/components/ui/BackLink"));

import styles from "./Layout.module.css";
import utilStyles from "@/styles/utils.module.css";

interface Props {
  home?: boolean;
  backlink?: string;
}

const Layout: FunctionComponent<Props> = ({ children, home, backlink }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header id="header">
        <NavBar />
        <div className={styles.container}>
          <section className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={siteTitle}
                />
                <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
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
                      alt={siteTitle}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{siteTitle}</a>
                  </Link>
                </h2>
              </>
            )}
          </section>
        </div>
      </header>
      <main id="main">
        <div className={styles.container}>
          <main>{children}</main>
          {!home && <BackLink backlink={backlink} />}
        </div>
      </main>
      <footer id="footer" className={styles.footer} />
    </>
  );
};

export default Layout;
