import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

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

      <header>
        <h1 className="text-3xl">Books</h1>

        <PageSummary>
          <p>
            <span className="italic font-fanwood text-xl">I love reading</span>.
            If I could get paid to review books, I&apos;d happily do that for
            the <Link href="/life">rest of my life</Link>. A good book will
            transport you through time, allowing you to{' '}
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
            Although I try to read about a broad range of topics, don&apos;t be
            surprised to find book reviews on space, computer science, history,
            humanity, science fiction, or fantasy. If you have suggestions on
            what I should read next, please let me know!
          </p>
        </PageSummary>

        <CurrentlyReading />
      </header>

      <section className="mt-12 space-y-8">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </section>
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
    'content',
  ])

  return {
    props: {
      books,
    },
  }
}

export default withLayout(Books)
