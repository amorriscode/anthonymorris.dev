import useSWR from 'swr';

import fetcher from '../lib/fetcher';

import { CurrentlyReadingBook } from '../types';

import CurrentlyReadingBookCard from './CurrentlyReadingBookCard';

function CurrentlyReading() {
  const { data } = useSWR('/api/currentlyReading', fetcher);

  if (!data?.currentlyReading.length) return <></>;

  return (
    <div className="space-y-4 bg-buzz-white bg-opacity-50 rounded-lg p-4">
      <h3>
        Currently Reading
      </h3>

      {data.currentlyReading.map((book: CurrentlyReadingBook) => (
        <CurrentlyReadingBookCard key={book.goodreadsUrl} book={book} />
      ))}
    </div>
  );
}

export default CurrentlyReading;
