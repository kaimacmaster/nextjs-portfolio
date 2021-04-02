import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";
import getAllExperienceItems from "@/lib/experience";
import dynamic from "next/dynamic";

const ExperienceBody = dynamic(() => import("@/components/experience-body"));

export default function Experience({ items }) {
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
                companyName={item.fields.companyName}
                jobTitle={item.fields.jobTitle}
                description={item.fields.description}
                slug={item.fields.slug}
                startDate={item.fields.startDate}
                leaveDate={item.fields.leaveDate}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getAllExperienceItems();

  return {
    props: {
      items,
    },
  };
}
