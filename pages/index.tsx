import Head from 'next/head';

import withLayout from '../components/withLayout';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">
          Hey there! 👋
        </h1>

        <p>Welcome to my corner of the interwebs. My personal playground.</p>

        <p>A place for my words, photos, projects, and experiments. There might be nothing for you here and that's okay. I'm glad you decided to stop by.</p>

        <p>I'm fascinated with the world around us. I intend to write about various things I learn in hopes of improving my understanding. Currently, I'm focusing on computer science and building products that have a positive impact on the world.</p>

        <p>Some other things you might find me talk about are space, books, science, awareness, fitness, Dungeons &amp; Dragons, and making music. If you like these things, we should chat.</p>

        <p>You can find me on <a href="http://twitter.com/amorriscode">Twitter</a> or <a href="https://www.linkedin.com/in/amorriscode">LinkedIn</a> but I'm trying to spend less time on social media these days.</p>

        <hr />

        <p className="text-xs ">This website was built using <a href="https://nextjs.org">Next.js</a> with deployments handled by <a href="https://vercel.com">Vercel</a>.</p>
      </main>
    </div>
  )
};

export default withLayout(Home);
