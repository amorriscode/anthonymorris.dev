import useSWR from 'swr'

import fetcher from '../lib/fetcher'

import { CurrentlyReadingBook } from '../types'

import CurrentlyReadingBookCard from './CurrentlyReadingBookCard'

function CurrentlyReading() {
  const { data } = useSWR('/api/currentlyReading', fetcher)

  if (!data?.currentlyReading.length) return <></>

  return (
    <div className="rounded-lg bg-am-black text-am-white p-10">
      <h3 className="font-am text-2xl mb-5">Currently Reading</h3>

      <div className="space-y-10">
        {data.currentlyReading.map((book: CurrentlyReadingBook) => (
          <CurrentlyReadingBookCard key={book.goodreadsUrl} book={book} />
        ))}
      </div>
    </div>
  )
}

export default CurrentlyReading
