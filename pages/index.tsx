import Link from 'next/link'
import { NextSeo } from 'next-seo'

import withLayout from '../components/withLayout'

function Home() {
  return (
    <>
      <NextSeo
        title="There's no place like /home"
        description="A digital garden and second brain."
        openGraph={{
          title: "There's no place like /home",
          description: 'A digital garden and second brain.',
        }}
      />

      <div className="container">
        <main>
          <h1 className="leading-none">Hey there! 👋</h1>

          <section className="prose">
            <p>
              Welcome to my corner of the interwebs. My{' '}
              <Link href="/second-brain/digital-garden">
                <a>digital garden</a>
              </Link>
              .
            </p>

            <p>
              A place for my words, photos, projects, and experiments. There
              might be nothing for you here and that's okay. I'm glad you
              decided to stop by.
            </p>

            <p>
              I'm fascinated with the world around us. I intend to{' '}
              <Link href="/words">
                <a>write</a>
              </Link>{' '}
              about various things I learn in hopes of improving my
              understanding. Currently, I'm focusing on computer science and{' '}
              <Link href="/projects">
                <a>building products</a>
              </Link>{' '}
              that have a positive impact on the world.
            </p>

            <p>
              Some other things you might find me talk about are space, books,
              science, awareness, fitness, Dungeons &amp; Dragons, and making
              music. If you like these things, we should chat.
            </p>

            <p>
              This website also serves as my{' '}
              <Link href="/second-brain">
                <a>second brain</a>
              </Link>
              . I think that it'll prove to be a pretty neat web experience over
              time.
            </p>

            <hr />

            <p>
              <span className="font-bold">Looking for something else?</span> You
              can @ me on{' '}
              <a
                href="http://twitter.com/amorriscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              , connect on{' '}
              <a
                href="https://www.linkedin.com/in/amorriscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , or fork me on{' '}
              <a
                href="https://github.com/amorriscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </section>
        </main>
      </div>
    </>
  )
}

export default withLayout(Home)
