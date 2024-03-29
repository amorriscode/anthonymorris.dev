import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'

import { Failure } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'
import PageSummary from '../../components/PageSummary'

function FailurePage({
  failure: { title, description, date, lessons, content },
}: {
  failure: Failure
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
        }}
      />

      <header>
        <div>
          <h1 className="text-3xl">{title}</h1>

          <div className="font-fanwood italic text-xl">
            failed {format(new Date(date), 'MMMM do, y')}
          </div>
        </div>

        <PageSummary>
          <h2 className="text-2xl">Lessons Learned</h2>

          <ul>
            {lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </PageSummary>
      </header>

      <article
        className="prose space-y-10"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const failure = getContentBySlug('failures', params?.slug as string, [
    'title',
    'description',
    'date',
    'slug',
    'content',
    'lessons',
  ])

  const content = await markdownToHtml(failure.content || '')

  return {
    props: {
      failure: {
        ...failure,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const failures = getAllContent('failures', ['slug']) as Failure[]

  return {
    paths: failures.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(FailurePage)
