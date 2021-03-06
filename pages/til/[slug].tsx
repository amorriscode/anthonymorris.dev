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

      <main>
        <h1 className="leading-none">{learning.title}</h1>

        <div className="text-xs pb-2">
          learned {format(new Date(learning.date), 'MMMM do, y')}
        </div>

        <article className="space-y-8">
          <div className="flex space-x-2">
            {learning.tags.map((tag) => (
              <div
                className="text-sm font-bold bg-buzz-purple-dark text-white px-4 py-1 rounded-lg"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: learning.content }}
          />
        </article>
      </main>
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
