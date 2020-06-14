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

        <p>
          I <span className="italic">love</span> reading. If I could get paid to review books, I'd happily do that for the <a href="/life">rest of my life</a>. A good book will transport you through time, allowing you to <a href="https://www.brainyquote.com/quotes/rene_descartes_134097" target="_blank" rel="noopener noreferrer">converse with the greatest minds that ever were</a>.
        </p>

        <p>
          So many good books have been written. I once did the math and was sad to discover that I will never have enough time to <a href="https://www.goodreads.com/user/show/5171404-anthony" target="_blank" rel="noopener noreferrer">read my entire to-read list</a>. The ones I do get around to reading will be reviewed here.
        </p>

        <p>
          Although I try to read about a broad range of topics, don't be surprised to find book reviews on space, computer science, history, humanity, science fiction, or fantasy. If you have suggestions on what I should read next, please let me know!
        </p>

        <hr />

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
