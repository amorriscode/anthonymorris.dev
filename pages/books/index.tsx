import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getAllContent } from '../../lib/api';

import { Book } from '../../types';

import withLayout from '../../components/withLayout';
import BookCard from '../../components/BookCard';

function Books({ books }: { books: Book[] }) {
  return (
    <div className="container">
      <Head>
        <title>books | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">
          Books
        </h1>

        {books.map(book => <BookCard key={book.slug} book={book} />)}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const books = getAllContent('books', [
    'title',
    'date',
    'slug',
    'description',
    'rating',
    'readDate',
  ]);

  return {
    props: {
      books,
    },
  }
}

export default withLayout(Books);
