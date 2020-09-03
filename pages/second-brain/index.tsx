import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

import { getAllContent } from "../../lib/api";

import { BrainEntry } from "../../types";

import withLayout from "../../components/withLayout";

function SecondBrain({ brainEntries }: { brainEntries: BrainEntry[] }) {
  return (
    <div className="container">
      <Head>
        <title>SecondBrain | Anthony Morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1 className="leading-none">SecondBrain</h1>

        <div>
          {brainEntries.map((brainEntry) => (
            <Link
              key={brainEntry.slug}
              href={`second-brain/${brainEntry.slug}`}
            >
              {brainEntry.slug}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const brainEntries = getAllContent("second-brain", ["content", "slug"]);

  return {
    props: {
      brainEntries,
    },
  };
};

export default withLayout(SecondBrain);
