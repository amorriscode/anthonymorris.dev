import Head from "next/head";

import withLayout from "../components/withLayout";

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anthony Morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">Hey there! 👋</h1>

        <p>Welcome to my corner of the interwebs. My personal playground.</p>

        <p>
          A place for my words, photos, projects, and experiments. There might
          be nothing for you here and that's okay. I'm glad you decided to stop
          by.
        </p>

        <p>
          I'm fascinated with the world around us. I intend to write about
          various things I learn in hopes of improving my understanding.
          Currently, I'm focusing on computer science and building products that
          have a positive impact on the world.
        </p>

        <p>
          Some other things you might find me talk about are space, books,
          science, awareness, fitness, Dungeons &amp; Dragons, and making music.
          If you like these things, we should chat.
        </p>

        <hr />

        <p className="text-sm">
          <span className="font-bold">Looking for something else?</span> You can
          @ me on{" "}
          <a
            href="http://twitter.com/amorriscode"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          , connect on{" "}
          <a
            href="https://www.linkedin.com/in/amorriscode"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , or fork me on{" "}
          <a
            href="https://github.com/amorriscode"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </main>
    </div>
  );
}

export default withLayout(Home);
