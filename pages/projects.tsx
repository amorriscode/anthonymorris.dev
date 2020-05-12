import Head from 'next/head';

import withLayout from '../components/withLayout';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>projects | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <p>I'll document my projects and experiments here. I have a few in the works so check back soon!</p>
      </main>
    </div>
  )
};

export default withLayout(Home);
