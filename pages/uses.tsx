import Link from 'next/link'
import { NextSeo } from 'next-seo'

import withLayout from '../components/withLayout'
import PageSummary from '../components/PageSummary'

function Home() {
  return (
    <>
      <NextSeo
        title="Uses"
        description="Tools I use to pretend I'm productive."
        openGraph={{
          title: 'Uses',
          description: "Tools I use to pretend I'm productive.",
        }}
      />

      <header>
        <h1 className="text-3xl">Uses</h1>

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
      </header>

      <article className="prose">
        <section>
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
              I&apos;m using <a href="https://starship.rs">starship</a> as my
              prompt.
            </li>
          </ul>
        </section>

        <section>
          <h2>Apps</h2>

          <ul>
            <li>
              I use{' '}
              <a
                href="https://obsidian.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Obsidian
              </a>{' '}
              for my{' '}
              <Link href="/second-brain">
                <a>second brain</a>
              </Link>
              .
            </li>

            <li>
              <a href="https://mochi.cards">Mochi</a> helps me remember things.
            </li>

            <li>
              I practice mindfulness with{' '}
              <a href="https://wakingup.com">Waking Up</a>.
            </li>

            <li>
              I subscribe to way too many podcasts on{' '}
              <a href="https://www.pocketcasts.com">Pocket Casts</a>.
            </li>
          </ul>
        </section>

        <section>
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
              Otherwise I&apos;m sitting on my{' '}
              <a href="https://www.fully.com/chairs/for-standing-desks/hag-capisco-puls-chair.html">
                Capisco Puls
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
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
                Vercel&apos;s
              </a>{' '}
              edge network.
            </li>
          </ul>
        </section>

        <section>
          <h2>Photography</h2>

          <ul>
            <li>
              I usually snap photos with my{' '}
              <a href="https://www.sony.ca/en/electronics/interchangeable-lens-cameras/ilce-7rm3">
                Sony a7R III mirrorless camera
              </a>
            </li>

            <li>
              I use my black chrome{' '}
              <a href="https://leica-camera.com/en-NZ/photography/cameras/m/m-a-typ-127-black">
                Leica M-A
              </a>{' '}
              to when shooting with film.
            </li>
          </ul>
        </section>

        <section>
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
              I make loud noises with my purple{' '}
              <a href="https://strandbergguitars.com/product-category/body-style/boden">
                .strandberg Boden
              </a>{' '}
              guitar.
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}

export default withLayout(Home)
