import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Failure } from '../../types'

import withLayout from '../../components/withLayout'
import FailureCard from '../../components/FailureCard'
import PageSummary from '../../components/PageSummary'

function Failures({ failures }: { failures: Failure[] }) {
  return <>
    <NextSeo
      title="Failures"
      description="Stories from times that didn't go as planned."
      openGraph={{
        title: 'Failures',
        description: "Stories from times that didn't go as planned.",
      }}
    />

    <header>
      <h1 className="text-3xl">Failures</h1>

      <PageSummary>
        <p>
          <a
            href="https://www.albertosavoia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alberto Savoia
          </a>
          , Google&apos;s first engineering manager,{' '}
          <a
            href="https://youtu.be/UnKqhHU0h7Y?t=452"
            target="_blank"
            rel="noopener noreferrer"
          >
            defines failure as anything where results don&apos;t meet
            expectations
          </a>
          . Looking back in my life, there are a lot of times when my results
          didn&apos;t live up to my expectations.
        </p>

        <p>
          I&apos;ve been trying to change my relationship with failure. Using
          a growth mindset allows you to utilize your failures. I decided to
          make a <span className="font-bold">failure journal</span>.
        </p>

        <p>
          This is a place for me to reflect on my failures. To learn from
          them. More importantly, it&apos;s a place to{' '}
          <span className="italic font-fanwood text-xl">
            forgive myself for my failures
          </span>
          . A place to help me shift focus from the past to the{' '}
          <Link href="/life">time I have left</Link>.
        </p>

        <p>
          All of my lessons learned can be viewed in{' '}
          <Link href="/lessons">
            list form
          </Link>
          .
        </p>
      </PageSummary>
    </header>

    <section className="space-y-8">
      {failures.map((failure) => (
        <FailureCard key={failure.slug} failure={failure} />
      ))}
    </section>
  </>;
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
