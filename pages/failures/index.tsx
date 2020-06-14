import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getAllContent } from '../../lib/api';

import { Failure } from '../../types';

import withLayout from '../../components/withLayout';
import FailureCard from '../../components/FailureCard';

function Failures({ failures }: { failures: Failure[] }) {
  return (
    <div className="container">
      <Head>
        <title>failures | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">
          Failures
        </h1>
        
        <p>
          <a href="https://www.albertosavoia.com/" target="_blank" rel="noopener noreferrer">Alberto Savoia</a>, Google's first engineering manager, <a href="https://youtu.be/UnKqhHU0h7Y?t=452" target="_blank" rel="noopener noreferrer">defines failure as anything where results don't meet expectations</a>. Looking back in my life, there are a lot of times when my results didn't live up to my expectations.
        </p>

        <p>
          I've been trying to change my relationship with failure. I think a growth mindset allows you to utilize your failures to enable growth. I decided to make a <span className="font-bold">failure journal</span>.
        </p>

        <p>
          This is a place for me to reflect on my failures. To learn from them. But more importantly, it's a place to <span className="italic">forgive myself for my failures</span>. A place to help me shift focus from the past to the <a href="/life">time I have left</a>.
        </p>

        {failures.map(failure => <FailureCard key={failure.slug} failure={failure} />)}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const failures = getAllContent('failures', [
    'title',
    'date',
    'slug',
    'description',
  ]);

  return {
    props: {
      failures,
    },
  }
}

export default withLayout(Failures);