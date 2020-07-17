import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { format } from 'date-fns';

import { Learning } from '../../types';

import markdownStyles from '../../styles/markdown-styles.module.css';
import markdownToHtml from '../../lib/markdownToHtml';
import { getContentBySlug, getAllContent } from '../../lib/api';

import withLayout from '../../components/withLayout';

function LearningPage({ learning }: { learning: Learning }) {
  return (
    <>
      <Head>
        <title>{learning.title} | Anthony Morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <article>
        <h1 className="leading-none">
          {learning.title}
        </h1>

        <div className="text-xs pb-2">
          learned {format(new Date(learning.date), 'MMMM do, y')}
        </div>

        <div className="flex space-x-2">
          {learning.tags.map(tag => <div className="text-sm font-bold bg-buzz-purple-dark text-white px-4 py-1 rounded-lg" key={tag}>{tag}</div>)}
        </div>

        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: learning.content }}
        />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const learning = getContentBySlug('learnings', params?.slug as string, [
    'title',
    'date',
    'slug',
    'content',
    'tags',
  ]);

  const content = await markdownToHtml(learning.content || '');

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
  const learnings = getAllContent('learnings', ['slug']) as Failure[];

  return {
    paths: learnings.map(failure => {
      return {
        params: {
          slug: failure.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(LearningPage);
