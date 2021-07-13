import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout/layout";
import utilStyles from "@/styles/utils.module.css";
import { getAllExperienceItems } from "@/lib/contentful";
import dynamic from "next/dynamic";

const ExperienceBody = dynamic(() => import("@/components/experience-body"));

export default function Experience({ items, preview }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Experience</title>
      </Head>
      <section className={utilStyles.padding1rem}>
        <h2 className={utilStyles.headingXl}>Experience</h2>
        <ul className={utilStyles.list}>
          {items.map((item) => (
            <li className={utilStyles.listItem} key={item.sys.id}>
              <ExperienceBody
                companyName={item.companyName}
                jobTitle={item.jobTitle}
                description={item.description}
                slug={item.slug}
                startDate={item.startDate}
                leaveDate={item.leaveDate}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const items = (await getAllExperienceItems(preview)) ?? [];
  return {
    props: { items, preview },
  };
}
