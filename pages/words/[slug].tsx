import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'

import { Writing } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'

function WordPage({ writing }: { writing: Writing }) {
  return (
    <>
      <NextSeo title={writing.title} />

      <main>
        <h1 className="leading-none">{writing.title}</h1>

        <article className="space-y-8">
          <div className="text-xs pb-2">
            written {format(new Date(writing.date), 'MMMM do, y')}
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: writing.content }}
          />
        </article>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const writing = getContentBySlug('words', params?.slug as string, [
    'title',
    'date',
    'slug',
    'content',
    'tags',
  ])

  const content = await markdownToHtml(writing.content || '')

  return {
    props: {
      writing: {
        ...writing,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const words = getAllContent('words', ['slug']) as Writing[]

  return {
    paths: words.map((writing) => {
      return {
        params: {
          slug: writing.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(WordPage)
