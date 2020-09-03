import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { BrainEntry } from "../../types";

import markdownStyles from "../../styles/markdown-styles.module.css";
import markdownToHtml from "../../lib/markdownToHtml";
import { getContentBySlug, getAllContent } from "../../lib/api";

import withLayout from "../../components/withLayout";

function BrainEntryPage({ brainEntry }: { brainEntry: BrainEntry }) {
  return (
    <>
      <Head>
        <title>{brainEntry.slug} | Anthony Morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <div>
          <span title="Part of my second brain">🧠</span>
        </div>

        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: brainEntry.content }}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const brainEntry = getContentBySlug("second-brain", params?.slug as string, [
    "slug",
    "content",
  ]);

  const content = await markdownToHtml(brainEntry.content || "");

  return {
    props: {
      brainEntry: {
        ...brainEntry,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const brainEntries = getAllContent("second-brain", ["slug"]) as BrainEntry[];

  return {
    paths: brainEntries.map((brainEntry) => {
      return {
        params: {
          slug: brainEntry.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default withLayout(BrainEntryPage);
