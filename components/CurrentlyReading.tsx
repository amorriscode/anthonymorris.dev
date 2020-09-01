import useSWR from "swr";

import fetcher from "../lib/fetcher";

import { CurrentlyReadingBook } from "../types";

import CurrentlyReadingBookCard from "./CurrentlyReadingBookCard";

function CurrentlyReading() {
  const { data } = useSWR("/api/currentlyReading", fetcher);

  if (!data?.currentlyReading.length) return <></>;

  return (
    <div className="bg-buzz-white bg-opacity-50 rounded-lg p-6">
      <h3>Currently Reading</h3>

      <div className="space-y-6">
        {data.currentlyReading.map((book: CurrentlyReadingBook) => (
          <CurrentlyReadingBookCard key={book.goodreadsUrl} book={book} />
        ))}
      </div>
    </div>
  );
}

export default CurrentlyReading;
