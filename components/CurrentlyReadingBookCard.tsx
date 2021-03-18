import { format } from 'date-fns'

import { CurrentlyReadingBook } from '../types'

function CurrentlyReadingBookCard({ book }: { book: CurrentlyReadingBook }) {
  return (
    <a
      href={book.goodreadsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="content-card block hover:cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold mb-1">{book.title}</div>

        <div className="text-sm border-b border-buzz-green-neon border-dashed">
          started on {format(new Date(book.startedDate), 'MMMM do, y')}
        </div>
      </div>

      <div className="text-sm">written by {book.author}</div>
    </a>
  )
}

export default CurrentlyReadingBookCard
