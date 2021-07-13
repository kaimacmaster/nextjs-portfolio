import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout/layout";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from "@/components/functional/date";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Stay up to date with what I&apos;m up to.</p>
      </section>
      {allPostsData && (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
