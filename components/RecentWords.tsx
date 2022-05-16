import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

import { Writing } from '../types'

import WritingCard from './WritingCard'

function RecentWords({ words }: { words: Writing[] }) {
  return (
    <div className="col-span-1 space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-am">Words</h2>

        <div className="arrow-link flex items-center space-x-1 group">
          <Link href="/words">
            <a className="text-sm">
              <span>all writing</span>
            </a>
          </Link>

          <div className="arrow text-purple-300 group-hover:text-purple-500 transition-all duration-300">
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {words.map((writing) => (
          <WritingCard key={writing.slug} writing={writing} />
        ))}
      </div>
    </div>
  )
}

export default RecentWords
