import Head from "next/head";
import Layout from "@/components/common/Layout";
import { siteTitle } from "@/lib/constants";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} | Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I&apos;m <strong>Kai</strong>. I&apos;m a full-stack web
          developer specialising in front-end development with over nine years
          working in industry.
        </p>
        <p>
          Proficient in all stages of development including dev-ops, front-end,
          back-end, architecture and web design.
        </p>
      </section>
    </Layout>
  );
}
