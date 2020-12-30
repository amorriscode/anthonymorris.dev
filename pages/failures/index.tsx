import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Failure } from '../../types'

import withLayout from '../../components/withLayout'
import FailureCard from '../../components/FailureCard'
import PageSummary from '../../components/PageSummary'

function Failures({ failures }: { failures: Failure[] }) {
  return (
    <>
      <NextSeo
        title="Failures"
        description="Stories from times that didn't go as planned."
        openGraph={{
          title: 'Failures',
          description: "Stories from times that didn't go as planned.",
        }}
      />

      <div className="container">
        <main>
          <h1 className="leading-none">Failures</h1>

          <article className="space-y-8">
            <PageSummary>
              <p>
                <a
                  href="https://www.albertosavoia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alberto Savoia
                </a>
                , Google's first engineering manager,{' '}
                <a
                  href="https://youtu.be/UnKqhHU0h7Y?t=452"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  defines failure as anything where results don't meet
                  expectations
                </a>
                . Looking back in my life, there are a lot of times when my
                results didn't live up to my expectations.
              </p>

              <p>
                I've been trying to change my relationship with failure. Using a
                growth mindset allows you to utilize your failures. I decided to
                make a <span className="font-bold">failure journal</span>.
              </p>

              <p>
                This is a place for me to reflect on my failures. To learn from
                them. More importantly, it's a place to{' '}
                <span className="italic">forgive myself for my failures</span>.
                A place to help me shift focus from the past to the{' '}
                <a href="/life">time I have left</a>.
              </p>

              <p>
                All of my lessons learned can be viewed in{' '}
                <Link href="/lessons">
                  <a>list form</a>
                </Link>
                .
              </p>
            </PageSummary>

            {failures.map((failure) => (
              <FailureCard key={failure.slug} failure={failure} />
            ))}
          </article>
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const failures = getAllContent('failures', [
    'title',
    'date',
    'slug',
    'description',
  ])

  return {
    props: {
      failures,
    },
  }
}

export default withLayout(Failures)
