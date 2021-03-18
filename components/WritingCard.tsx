import Link from 'next/link'
import { format } from 'date-fns'

import { Writing } from '../types'

function WritingCard({ writing }: { writing: Writing }) {
  return (
    <Link href="/words/[slug]" as={`/words/${writing.slug}`} passHref>
      <a className="content-card block">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium mb-1 font-am">
            {writing.title}
          </div>

          <div className="text-xs">
            {format(new Date(writing.date), 'MMM do, y')}
          </div>
        </div>

        <div className="text-sm">{writing.description}</div>
      </a>
    </Link>
  )
}

export default WritingCard
