import Link from 'next/link'
import { format } from 'date-fns'

import { Writing } from '../types'

function WritingCard({ writing }: { writing: Writing }) {
  return (
    <Link href="/words/[slug]" as={`/words/${writing.slug}`} passHref>
      <a className="block text-stone-300 hover:text-stone-400 group">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium mb-1 font-am text-stone-100 group-hover:text-stone-400 transition-colors duration-300">
            {writing.title}
          </div>

          <div className="font-fanwood text-lg italic">
            {format(new Date(writing.date), 'MMM do, y')}
          </div>
        </div>

        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
          {writing.description}
        </div>
      </a>
    </Link>
  )
}

export default WritingCard
