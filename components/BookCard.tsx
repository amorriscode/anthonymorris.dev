import Link from 'next/link';
import { format } from 'date-fns';

import { Book } from '../types';

import BookRating from './BookRating';

function BookCard({ book }: { book: Book }) {
  return (
    <>
      <Link href="/books/[slug]" as={`/books/${book.slug}`} passHref>
        <a className="content-card block">
          <div className="flex justify-between items-center">
            <div className="book-title text-lg font-bold mb-1">
              {book.title}
            </div>

            <div className="book-rating text-sm border-b border-buzz-green-neon border-dashed">
              <BookRating rating={book.rating} />
            </div>

            <div className="book-read-date hidden text-sm border-b border-buzz-green-neon border-dashed">
              finished on {format(new Date(book.readDate), 'MMMM do, y')}
            </div>
          </div>

          <div className="book-description text-sm">
            {book.description}
          </div>

          <div className="book-author hidden text-sm">
            written by {book.author}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .book-title {
          transition: color 0.15s ease-in;
        }

        .content-card:hover .book-title {
          color: #e200b9;
        }

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
  );
}

export default BookCard;
