import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { format } from 'date-fns';

import { Failure } from '../../types';

import markdownStyles from '../../styles/markdown-styles.module.css';
import markdownToHtml from '../../lib/markdownToHtml';
import { getContentBySlug, getAllContent } from '../../lib/api';

import withLayout from '../../components/withLayout';
import PageSummary from '../../components/PageSummary';

function FailurePage({ failure }: { failure: Failure }) {
  return (
    <>
      <Head>
        <title>{failure.title.toLowerCase()} | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <article>
        <h1 className="leading-none">
          {failure.title}
        </h1>

        <div className="text-xs pb-2">
          failed {format(new Date(failure.date), 'MMMM do, y')}
        </div>

        <PageSummary>
          <h3>
            Lessons Learned
          </h3>

          <ul className="list-disc pl-5">
            {failure.lessons.map(lesson => <li key={lesson}>{lesson}</li>)}
          </ul>
        </PageSummary>

        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: failure.content }}
        />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const failure = getContentBySlug('failures', params?.slug as string, [
    'title',
    'date',
    'slug',
    'content',
    'lessons',
  ]);

  const content = await markdownToHtml(failure.content || '');

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
  const failures = getAllContent('failures', ['slug']) as Failure[];

  return {
    paths: failures.map(failure => {
      return {
        params: {
          slug: failure.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(FailurePage);
