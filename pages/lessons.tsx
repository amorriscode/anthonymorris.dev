import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getAllContent } from '../lib/api';

import { Failure, Lesson } from '../types';

import withLayout from '../components/withLayout';
import PageSummary from '../components/PageSummary';

function Lessons({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="container">
      <Head>
        <title>lessons | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">
          Lessons Learned
        </h1>
        
        <PageSummary>
          <p>
            This is a collection of lessons learned pulled from my <Link href="/failures"><a>failures</a></Link>.
          </p>
        </PageSummary>

        <ul className="list-disc pl-5">
          {lessons.map(lesson => (
            <li key={lesson.title}>
              <Link href={`failures/${lesson.failure}`}>
                <a>{lesson.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const failures = getAllContent('failures', [
    'slug',
    'lessons',
  ]) as Failure[];

  const lessons = [] as Lesson[];

  failures.forEach(failure => {
    failure.lessons.forEach(lesson => {
      lessons.push({
        title: lesson,
        failure: failure.slug,
      });
    });
  });

  lessons.sort((a, b) => a.title.localeCompare(b.title));

  return {
    props: {
      lessons,
    },
  }
}

export default withLayout(Lessons);
