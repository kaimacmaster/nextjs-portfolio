import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout/layout";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} | Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>Kai</strong>. I'm a full-stack web developer
          specialising in front-end development with over nine years working in
          industry.
        </p>
        <p>
          Proficient in all stages of development including dev-ops, front-end,
          back-end, architecture and web design.
        </p>
      </section>
    </Layout>
  );
}
