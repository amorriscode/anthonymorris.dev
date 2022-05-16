import { format } from 'date-fns'

import { CurrentlyReadingBook } from '../types'

function CurrentlyReadingBookCard({ book }: { book: CurrentlyReadingBook }) {
  return (
    <a
      href={book.goodreadsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="content-card block hover:cursor-pointer text-stone-300 hover:text-stone-400 group"
    >
      <div className="flex justify-between items-center">
        <div className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300">
          {book.title}
        </div>

        <div className="font-fanwood italic text-lg text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
          started {format(new Date(book.startedDate), 'MMMM do, y')}
        </div>
      </div>

      <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
        written by {book.author}
      </div>
    </a>
  )
}

export default CurrentlyReadingBookCard
