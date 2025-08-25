import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import Link from 'next/link'

import NavLink from '../components/navLink'

function Home({
  greeting,
  profileImageBlurDataURL,
}: {
  greeting: string
  profileImageBlurDataURL: string
}) {
  return (
    <div className="py-32 px-6 md:px-0">
      <NextSeo
        title="There's no place like /home"
        description="A digital garden and second brain."
        openGraph={{
          title: "There's no place like /home",
          description: 'A digital garden and second brain.',
        }}
      />

      <div className="mx-auto max-w-2xl">
        <h1 className="text-stone-100 font-mono mb-4">Anthony Morris</h1>

        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image
              src="/assets/profile.png"
              alt="Profile of Anthony Morris"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={profileImageBlurDataURL}
            />
          </div>

          <div>
            <p className="text-stone-500">{greeting}</p>
            <p className="text-stone-500">san francisco, california</p>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-2xl space-y-12 mt-12">
        <section className="space-y-4 prose">
          <p>
            <span className="font-fanwood text-xl italic">
              Product-focused software engineer
            </span>
            .
          </p>

          <p>
            I&apos;m interested in open source, delightful user experiences, and
            the future of the technology.
          </p>

          <p>
            When not writing code, I enjoy admiring bookshelves, capturing
            photographs, reading, and discovering more about what I don&apos;t
            know.
          </p>

          <p>
            Find me on{' '}
            <Link href="https://twitter.com/amorriscode" target="_blank">
              Twitter
            </Link>
            ,{' '}
            <Link
              href="https://www.linkedin.com/in/amorriscode/"
              target="_blank"
            >
              LinkedIn
            </Link>
            ,{' '}
            <Link href="https://github.com/amorriscode" target="_blank">
              GitHub
            </Link>
            , or{' '}
            <Link
              href="https://www.goodreads.com/user/show/5171404-anthony"
              target="_blank"
            >
              Goodreads
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-stone-100 font-mono mb-4">Now</h2>

          <p className="prose">
            I&apos;m currently imagining what <Link href="/life">life</Link>{' '}
            I&apos;ll be proud of ten years from now. Working backward from
            there.
          </p>
        </section>

        <section className="flex flex-col">
          <h2 className="text-stone-100 font-mono mb-4">The Garden</h2>

          <NavLink title="second brain" path="/second-brain" />

          <NavLink title="bucket list" path="/bucket-list" />

          <NavLink title="projects" />

          <NavLink title="failures" />

          <NavLink title="books" />

          <NavLink title="words" />

          <NavLink title="uses" />
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const greetings = [
    'brb, building a thing',
    'to infinity and beyond',
    'ad astra',
    'Computers are useless. They can only give you answers.',
    'bonjour',
    'guten tag',
    'nǐ hǎo',
    '01101000 01100101 01101100 01101100 01101111',
    'hello world',
    '/dev/null',
    'I would tell you a UDP joke, but you might not get it.',
    "Anthony'); DROP TABLE users;--",
  ]

  const { base64 } = await getPlaiceholder('/assets/profile.png', { size: 4 })

  return {
    props: {
      greeting: greetings[Math.floor(Math.random() * greetings.length)],
      profileImageBlurDataURL: base64,
    },
  }
}

export default Home
