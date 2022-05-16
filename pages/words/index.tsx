import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Writing } from '../../types'

import withLayout from '../../components/withLayout'
import WritingCard from '../../components/WritingCard'
import PageSummary from '../../components/PageSummary'

function Words({ words }: { words: Writing[] }) {
  return (
    <>
      <NextSeo
        title="Words"
        description="My attempts to think clearer through writing."
        openGraph={{
          title: 'Words',
          description: 'My attempts to think clearer through writing.',
        }}
      />

      <header>
        <h1 className="text-3xl">Words</h1>

        <PageSummary>
          <p>
            I&apos;ve always been fascinated by the written word. When I was
            younger I{' '}
            <Link href="/books">
              <a>escaped the world through books</a>
            </Link>
            . The way books made me feel always inspired me to write.
          </p>

          <p>
            Being a good writer is about being an effective communicator. But
            don&apos;t forget the artistry, the curiosity, and the empathy.
            Writing is a skill that pays back all who invest in it.
          </p>

          <p>
            I don&apos;t write nearly enough to be good but this is my place to
            practice. You might find short stories, poems, how-tos, or essays.
            Long and short, serious and fun, good and bad.
          </p>

          <p>I hope you can find something you enjoy!</p>
        </PageSummary>
      </header>

      <section className="space-y-8">
        {words.map((writing) => (
          <WritingCard key={writing.slug} writing={writing} />
        ))}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const words = getAllContent('words', ['title', 'date', 'slug', 'description'])

  return {
    props: {
      words,
    },
  }
}

export default withLayout(Words)
