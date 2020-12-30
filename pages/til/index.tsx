import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Learning } from '../../types'

import withLayout from '../../components/withLayout'
import LearningCard from '../../components/LearningCard'
import PageSummary from '../../components/PageSummary'

function TIL({ learnings }: { learnings: Learning[] }) {
  return (
    <>
      <NextSeo
        title="TIL"
        description="Today I learned some stuff."
        openGraph={{
          title: 'TIL',
          description: 'Today I learned some stuff.',
        }}
      />

      <div className="container">
        <main>
          <h1 className="leading-none">TIL</h1>

          <article className="space-y-8">
            <PageSummary>
              <p>
                How do you keep track of all the things you're learning about?
              </p>

              <p>
                If you find it difficult, you're not alone. There are so many
                facts at our fingertips these days. How far is it from here to
                the center of the galaxy?{' '}
                <a
                  href="https://www.wolframalpha.com/input/?i=distance+between+earth+and+centre+of+the+milky+way"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  It's not hard to find using a simple search (but don't ask me
                  to verify the accuracy).
                </a>
              </p>

              <p>
                I haven't done a great job at keeping track of things I learn.
                But I want to. I decided to add a{' '}
                <span className="font-bold">Today I Learned</span> page to keep
                track of those things!
              </p>

              <p>
                I can't promise this page will contain things that are of much
                use. I can promise there will be a whole lot of random stuff.
                Either way, hopefully it provides a fun place for me to ponder
                the inner workings of life, the universe, and everything.
              </p>
            </PageSummary>

            {learnings.map((learning) => (
              <LearningCard key={learning.slug} learning={learning} />
            ))}
          </article>
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const learnings = getAllContent('learnings', [
    'title',
    'date',
    'slug',
    'description',
  ])

  return {
    props: {
      learnings,
    },
  }
}

export default withLayout(TIL)
