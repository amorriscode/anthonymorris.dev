import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { BrainEntry } from '../../types'

import withLayout from '../../components/withLayout'
import PageSummary from '../../components/PageSummary'

function SecondBrain({ brainEntries }: { brainEntries: BrainEntry[] }) {
  return (
    <>
      <NextSeo
        title="Second Brain"
        description="One brain wasn't enough."
        openGraph={{
          title: 'Second Brain',
          description: "One brain wasn't enough.",
        }}
      />

      <div className="container">
        <main>
          <h1 className="leading-none">Second Brain</h1>

          <PageSummary>
            <p>
              A second brain is a place to capture and organize ideas and
              information. Instead of using a structure of folders, everything
              connects together with links.
            </p>

            <p>
              There are second brain links all over my website. They will guide
              you from idea to idea. You never know what you might find!
            </p>

            <p>
              If you want to create your own second brain, you might want to
              look at{' '}
              <a
                href="https://foambubble.github.io/foam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Foam
              </a>
              ,{' '}
              <a
                href="https://roamresearch.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roam
              </a>
              , or{' '}
              <a
                href="https://obsidian.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Obsidian
              </a>
              .
            </p>
          </PageSummary>

          <div className="flex flex-wrap justify-between">
            {brainEntries.map((brainEntry) => (
              <Link
                key={brainEntry.slug}
                href="/second-brain/[slug]"
                as={`second-brain/${brainEntry.slug}`}
              >
                <a className="m-2">{brainEntry.slug}</a>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const brainEntries = getAllContent('second-brain', ['content', 'slug'])

  return {
    props: {
      brainEntries,
    },
  }
}

export default withLayout(SecondBrain)
