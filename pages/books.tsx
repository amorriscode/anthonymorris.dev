import Head from 'next/head';

import withLayout from '../components/withLayout';

function Books() {
  return (
    <div className="container">
      <Head>
        <title>books | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <p>When I finish my next book I'll start adding reviews/reflections here.</p>
      </main>
    </div>
  )
};

export default withLayout(Books);
