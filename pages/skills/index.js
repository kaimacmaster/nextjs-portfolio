import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import SkillsList from "@/components/skills-list";
import utilStyles from "@/styles/utils.module.css";
import {
  faAws,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faVuejs,
  faYarn,
  faLess,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Skills</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>Technology</h3>
        <SkillsList
          faIcons={[
            faNodeJs,
            faVuejs,
            faReact,
            faYarn,
            faNpm,
            faSass,
            faLess,
            faAws,
          ]}
        />
      </section>
    </Layout>
  );
}
