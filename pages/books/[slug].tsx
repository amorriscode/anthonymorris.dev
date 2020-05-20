import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { format } from 'date-fns';

import { Book } from '../../types';

import markdownStyles from '../../styles/markdown-styles.module.css';
import markdownToHtml from '../../lib/markdownToHtml';
import { getContentBySlug, getAllContent } from '../../lib/api';

import withLayout from '../../components/withLayout';
import BookRating from '../../components/BookRating';

function BookPage({ book }: { book: Book }) {
  return (
    <>
      <Head>
        <title>{book.title.toLowerCase()} | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <article>
        <div className="flex justify-between items-center mb-4">
          <h1 className="mb-0 leading-none">
            {book.title}
          </h1>

          <div className="text-xs text-right">
            <div className="border-b inline-block border-buzz-green-neon border-dashed">
              <BookRating rating={book.rating} />
            </div>

            <div className="border-b border-buzz-green-neon border-dashed">
              finished reading on {format(new Date(book.readDate), 'MMMM do, y')}
            </div>
          </div>
        </div>

        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: book.content }}
        />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = getContentBySlug('books', params?.slug as string, [
    'title',
    'readDate',
    'slug',
    'content',
    'rating',
  ]);

  const content = await markdownToHtml(book.content || '');

  return {
    props: {
      book: {
        ...book,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const books = getAllContent('books', ['slug']) as Book[];

  return {
    paths: books.map(book => {
      return {
        params: {
          slug: book.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(BookPage);
