import Head from 'next/head';

import withLayout from '../components/withLayout';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>photos | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <p>I'm going to store some of my photographs here. I shoot with a <a href="https://en.wikipedia.org/wiki/Canon_A-1">Canon A-1</a> so I need to get around to scanning my pictures first.</p>
      </main>
    </div>
  )
};

export default withLayout(Home);
