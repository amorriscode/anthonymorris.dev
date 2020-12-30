import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../lib/api'

import { Failure, Lesson } from '../types'

import withLayout from '../components/withLayout'
import PageSummary from '../components/PageSummary'

function Lessons({ lessons }: { lessons: Lesson[] }) {
  return (
    <>
      <NextSeo
        title="Lessons"
        description="Lessons learned from failure."
        openGraph={{
          title: 'Lessons',
          description: 'A collection of lessons learned from failure.',
        }}
      />

      <div className="container">
        <main className="space-y-8">
          <h1 className="leading-none">Lessons Learned</h1>

          <PageSummary>
            <p>
              This is a collection of lessons learned pulled from my{' '}
              <Link href="/failures">
                <a>failures</a>
              </Link>
              .
            </p>
          </PageSummary>

          <section className="prose">
            <ul>
              {lessons.map((lesson) => (
                <li key={lesson.title}>
                  <Link href={`failures/${lesson.failure}`}>
                    <a>{lesson.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const failures = getAllContent('failures', ['slug', 'lessons']) as Failure[]

  const lessons = [] as Lesson[]

  failures.forEach((failure) => {
    failure.lessons.forEach((lesson) => {
      lessons.push({
        title: lesson,
        failure: failure.slug,
      })
    })
  })

  lessons.sort((a, b) => a.title.localeCompare(b.title))

  return {
    props: {
      lessons,
    },
  }
}

export default withLayout(Lessons)
