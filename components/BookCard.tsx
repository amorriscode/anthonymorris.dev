import Link from 'next/link'
import { format } from 'date-fns'

import { Book } from '../types'

import BookRating from './BookRating'

function BookCardContent({
  book: { title, rating, readDate, description, author, content },
}: {
  book: Book
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className={`text-lg font-medium mb-1 text-stone-100 ${
            content.length
              ? 'group-hover:text-stone-400 transition-colors duration-300'
              : ''
          }`}
        >
          {title}
        </div>

        <div className="text-xs group-hover:hidden">
          <BookRating rating={rating} />
        </div>

        <div className="hidden group-hover:block text-xs">
          finished on {format(new Date(readDate), 'MMM do, y')}
        </div>
      </div>

      <div className="text-sm group-hover:hidden">{description}</div>

      <div className="hidden group-hover:block text-sm">
        written by {author}
      </div>
    </>
  )
}

function BookCard({ book }: { book: Book }) {
  return book.content.length ? (
    <Link href="/books/[slug]" as={`/books/${book.slug}`} passHref>
      <a className="block text-stone-400 hover:text-stone-500 transition-colors duration-300 group">
        <BookCardContent book={book} />
      </a>
    </Link>
  ) : (
    <div className="group text-stone-400">
      <BookCardContent book={book} />
    </div>
  )
}

export default BookCard
