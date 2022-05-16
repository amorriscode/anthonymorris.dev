import Link from 'next/link'
import { format } from 'date-fns'

import { Book } from '../types'

import BookRating from './BookRating'

function BookCard({ book }: { book: Book }) {
  return (
    <>
      <Link href="/books/[slug]" as={`/books/${book.slug}`} passHref>
        <a className="block text-stone-400 hover:text-stone-500 transition-colors duration-300 group">
          <div className="flex justify-between items-center">
            <div className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300">
              {book.title}
            </div>

            <div className="book-rating text-xs">
              <BookRating rating={book.rating} />
            </div>

            <div className="book-read-date hidden text-xs">
              finished on {format(new Date(book.readDate), 'MMM do, y')}
            </div>
          </div>

          <div className="book-description text-sm ">{book.description}</div>

          <div className="book-author hidden text-sm">
            written by {book.author}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .content-card:hover .book-rating,
        .content-card:hover .book-description {
          display: none;
        }

        .content-card:hover .book-read-date,
        .content-card:hover .book-author {
          display: block;
        }
      `}</style>
    </>
  )
}

export default BookCard
