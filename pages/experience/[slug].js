import Head from "next/head";
import {useRouter} from "next/router";
import {getAllExperienceSlugs, getAllWorkItems} from "@/lib/contentful";

import Layout, {siteTitle} from "@/components/layout";
import WorkItem from "@/components/work-item";

export default function Work({work, companyName}) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>loading...</p>
  }

  if (!router.isFallback && !work) {
    return <p>error...</p>
  }

  return (
    <Layout backlink="experience">
      <Head>
        <title>{siteTitle} | {companyName}</title>
      </Head>
      <div>
        <h1>{companyName}</h1>
        {work.length
          ? work.map((item) =>
            <WorkItem key={item.sys.id} title={item.title} content={item.content.json} description={item.description}/>
          )
          : <p>No work found for this company, I like coding but I'm not so good at updating contentful.</p>}
      </div>
    </Layout>
  )
};

export async function getStaticProps({params, preview = false}) {
  const data = await getAllWorkItems(params.slug, preview) ?? null

  return {
    props: {
      preview,
      work: data.workItems,
      companyName: data.companyName
    },
  }
}

export async function getStaticPaths() {
  const slugs = await getAllExperienceSlugs()
  return {
    paths: slugs?.map(({slug}) => `/experience/${slug}`) ?? [],
    fallback: true,
  }
}
