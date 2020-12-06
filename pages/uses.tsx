import Head from 'next/head'
import Link from 'next/link'

import withLayout from '../components/withLayout'
import PageSummary from '../components/PageSummary'

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Uses | Anthony Morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1 className="leading-none">Uses</h1>

        <article className="space-y-8">
          <PageSummary>
            <p>
              Developers love{' '}
              <a
                href="https://uses.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                talking about their tools
              </a>
              . These are the tools I like to use to be productive and have fun.
            </p>
          </PageSummary>

          <section className="prose">
            <h2>Editor &amp; Terminal</h2>

            <ul>
              <li>
                I wish I were a vim power user but alas I use{' '}
                <a href="https://code.visualstudio.com">Visual Studio Code</a>.
              </li>

              <li>
                I use the <a href="https://draculatheme.com">Dracula theme</a>{' '}
                everywhere possible.
              </li>

              <li>
                I'm using <a href="https://starship.rs">starship</a> as my
                prompt.
              </li>
            </ul>
          </section>

          <section className="prose">
            <h2>Apps</h2>

            <ul>
              <li>
                <a href="https://mochi.cards">Mochi</a> helps me remember
                things.
              </li>

              <li>
                I like using <a href="https://www.oakmeditation.com">Oak</a> to
                practice mindfulness but have also been using{' '}
                <a href="https://wakingup.com">Waking Up</a>.
              </li>

              <li>
                I subscribe to way too many podcasts on{' '}
                <a href="https://www.pocketcasts.com">Pocket Casts</a>.
              </li>
            </ul>
          </section>

          <section className="prose">
            <h2>Desk</h2>

            <ul>
              <li>
                Sometimes I stand with my{' '}
                <a href="https://www.fully.com/standing-desks/jarvis.html">
                  Fully Jarvis
                </a>{' '}
                standing desk.
              </li>

              <li>
                Otherwise I'm sitting on my{' '}
                <a href="https://www.fully.com/chairs/for-standing-desks/hag-capisco-puls-chair.html">
                  Capisco Puls
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="prose">
            <h2>Website</h2>

            <ul>
              <li>
                Hacked together with{' '}
                <a
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>{' '}
                and{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>
                .
              </li>

              <li>
                I use{' '}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>{' '}
                to make things pretty.
              </li>

              <li>
                Deployed on{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel's
                </a>{' '}
                edge network.
              </li>

              <li>
                I use{' '}
                <a
                  href="https://foambubble.github.io/foam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Foam
                </a>{' '}
                to integrate my{' '}
                <Link href="/second-brain">
                  <a>second brain</a>
                </Link>
                .
              </li>
            </ul>
          </section>

          <section className="prose">
            <h2>Misc</h2>

            <ul>
              <li>
                I try to lessen my environmental impact by donating to{' '}
                <a href="https://projectwren.com/profile/anthonymorris">
                  Project Wren
                </a>
                .
              </li>

              <li>
                I love paper notebooks but my{' '}
                <a href="https://remarkable.com">reMarkable</a> has been a good
                replacement. I love the ability to organize and not waste paper.
                But I miss my notebooks.
              </li>

              <li>
                I take photographs with a{' '}
                <a href="https://en.wikipedia.org/wiki/Canon_A-1">Canon A-1</a>{' '}
                film camera.
              </li>

              <li>
                I make loud noises with my purple{' '}
                <a href="https://strandbergguitars.com/product-category/body-style/boden">
                  .strandberg Boden
                </a>{' '}
                guitar.
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  )
}

export default withLayout(Home)
