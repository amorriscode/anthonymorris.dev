import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Book } from '../../types'

import withLayout from '../../components/withLayout'
import BookCard from '../../components/BookCard'
import PageSummary from '../../components/PageSummary'
import CurrentlyReading from '../../components/CurrentlyReading'

function Books({ books }: { books: Book[] }) {
  return (
    <>
      <NextSeo
        title="Books"
        description="Where I try to remember what the heck I read."
        openGraph={{
          title: 'Books',
          description: 'Where I try to remember what the heck I read.',
        }}
      />

      <header className="mx-auto max-w-3xl space-y-5">
        <h1 className="text-4xl font-am px-10">books</h1>

        <PageSummary>
          <p>
            I <span className="italic">love</span> reading. If I could get paid
            to review books, I'd happily do that for the{' '}
            <a href="/life">rest of my life</a>. A good book will transport you
            through time, allowing you to{' '}
            <a
              href="https://www.brainyquote.com/quotes/rene_descartes_134097"
              target="_blank"
              rel="noopener noreferrer"
            >
              converse with the greatest minds that ever were
            </a>
            .
          </p>

          <p>
            So many good books have been written. I once did the math and was
            sad to discover that I will never have enough time to{' '}
            <a
              href="https://www.goodreads.com/user/show/5171404-anthony"
              target="_blank"
              rel="noopener noreferrer"
            >
              read my entire to-read list
            </a>
            . The ones I do get around to reading will be reviewed here.
          </p>

          <p>
            Although I try to read about a broad range of topics, don't be
            surprised to find book reviews on space, computer science, history,
            humanity, science fiction, or fantasy. If you have suggestions on
            what I should read next, please let me know!
          </p>
        </PageSummary>

        <CurrentlyReading />
      </header>

      <main className="mx-auto max-w-3xl space-y-10 p-10">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const books = getAllContent('books', [
    'title',
    'date',
    'slug',
    'description',
    'rating',
    'readDate',
    'author',
  ])

  return {
    props: {
      books,
    },
  }
}

export default withLayout(Books)
