import Head from 'next/head';

import withLayout from '../components/withLayout';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>uses | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">
          Uses
        </h1>

        <p>
          Developers lover <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer">talking about their tools</a>. These are the tools I like to use to be productive and have fun.
        </p>

        <hr />

        <section>
          <h2>
            Editor &amp; Terminal
          </h2>

          <ul className="pl-6 list-disc -mt-4">
            <li>
              I wish I were a vim power user but alas I use <a href="https://code.visualstudio.com">Visual Studio Code</a>.
            </li>

            <li>
              I use the <a href="https://draculatheme.com">Dracula theme</a> everywhere possible.
            </li>

            <li>
              I'm using <a href="https://starship.rs">starship</a> as my prompt.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            Apps
          </h2>

          <ul className="pl-6 list-disc -mt-4">
            <li>
              <a href="https://culturedcode.com/things">Things 3</a> keeps me focused and accountable.
            </li>

            <li>
              I journal daily with either <a href="https://apps.apple.com/us/app/stoic-mental-health-training/id1312926037">stoic.</a> or <a href="https://writewithwrabit.com">Wrabit</a>.
            </li>

            <li>
              <a href="https://mochi.cards">Mochi</a> helps me remember things.
            </li>

            <li>
              I like using <a href="https://www.oakmeditation.com">Oak</a> to practice mindfulness but have also been using <a href="https://wakingup.com">Waking Up</a>.
            </li>

            <li>
              I subscribe to way too many podcasts on <a href="https://www.pocketcasts.com">Pocket Casts</a>.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            Desk
          </h2>

          <ul className="pl-6 list-disc -mt-4">
            <li>
              Sometimes I stand with my <a href="https://www.fully.com/standing-desks/jarvis.html">Fully Jarvis</a> standing desk.
            </li>

            <li>
              Otherwise I'm sitting on my <a href="https://www.fully.com/chairs/for-standing-desks/hag-capisco-puls-chair.html">Capisco Puls</a>.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            Misc
          </h2>

          <ul className="pl-6 list-disc -mt-4">
            <li>
              I love paper notebooks but my <a href="https://remarkable.com">reMarkable</a> has been a good replacement. I love the ability to organize and not waste paper. But I miss my notebooks.
            </li>

            <li>
              I take photographs with a <a href="https://en.wikipedia.org/wiki/Canon_A-1">Canon A-1</a> film camera.
            </li>

            <li>
              I make loud noises with my purple <a href="https://strandbergguitars.com/product-category/body-style/boden">.strandberg Boden</a> guitar.
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
};

export default withLayout(Home);
