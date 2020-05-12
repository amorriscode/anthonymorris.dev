import Head from 'next/head';

import withLayout from '../components/withLayout';

function Writing() {
  return (
    <div className="container">
      <Head>
        <title>writing | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <p>I haven't written anything on the new site yet. Check back soon!</p>
      </main>
    </div>
  )
};

export default withLayout(Writing);
