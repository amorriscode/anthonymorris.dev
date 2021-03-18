import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'

import { Learning } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'

function LearningPage({ learning }: { learning: Learning }) {
  return (
    <>
      <NextSeo
        title={learning.title}
        description={learning.description}
        openGraph={{
          title: learning.title,
          description: learning.description,
        }}
      />

      <header className="mx-auto max-w-3xl px-10 space-y-5">
        <div>
          <h1 className="font-am text-4xl">{learning.title}</h1>

          <div className="text-xs">
            learned {format(new Date(learning.date), 'MMMM do, y')}
          </div>
        </div>

        <div className="flex space-x-2">
          {learning.tags.map((tag) => (
            <div
              className="text-sm font-bold bg-am-black text-white px-4 py-1 rounded-lg"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </header>

      <article
        className="prose mx-auto max-w-3xl p-10"
        dangerouslySetInnerHTML={{ __html: learning.content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const learning = getContentBySlug('learnings', params?.slug as string, [
    'title',
    'description',
    'date',
    'slug',
    'content',
    'tags',
  ])

  const content = await markdownToHtml(learning.content || '')

  return {
    props: {
      learning: {
        ...learning,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const learnings = getAllContent('learnings', ['slug']) as Learning[]

  return {
    paths: learnings.map((failure) => {
      return {
        params: {
          slug: failure.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(LearningPage)
