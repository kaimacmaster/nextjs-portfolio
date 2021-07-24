import Head from "next/head";
import Layout from "@/components/common/Layout";
import { siteTitle } from "@/lib/constants";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  const getYearsActive = () => {
    let diff = (new Date().getTime() - new Date("2011-11-01").getTime()) / 1000;
    diff /= 60 * 60 * 24;

    return Math.abs(Math.floor(diff / 365.25));
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle} | Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I&apos;m <strong>Kai</strong>. I&apos;m a full-stack web
          developer specialising in front-end development with over{" "}
          {getYearsActive()} years working in industry.
        </p>
        <p>
          Proficient in all stages of development including dev-ops, front-end,
          back-end, architecture and web design.
        </p>
      </section>
    </Layout>
  );
}
