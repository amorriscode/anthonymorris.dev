import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
          integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
          integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa"
          crossOrigin="anonymous"
        ></script>
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

        {!!brainEntry.backlinks.length && (
          <div className="mt-8 bg-buzz-white bg-opacity-50 rounded-lg rounded-tl-none rounded-tr-none border-t-4 border-buzz-green p-6 md:p-8">
            <h3>Backlinks</h3>

            <div className="flex flex-wrap justify-between">
              {brainEntry.backlinks.map((backlink) => (
                <Link
                  key={backlink}
                  href="/second-brain/[slug]"
                  as={`/second-brain/${backlink}`}
                >
                  <a className="m-2">{backlink}</a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const brainEntry = getContentBySlug("second-brain", params?.slug as string, [
    "slug",
    "content",
    "backlinks",
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
