import Link from 'next/link'
import { format } from 'date-fns'

import { Failure } from '../types'

function FailureCard({ failure }: { failure: Failure }) {
  return (
    <Link href="/failures/[slug]" as={`/failures/${failure.slug}`} passHref>
      <a className="block text-stone-300 hover:text-stone-400 group">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300">
            {failure.title}
          </div>

          <div className="font-fanwood italic text-lg">
            {format(new Date(failure.date), 'MMMM do, y')}
          </div>
        </div>

        <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
          {failure.description}
        </div>
      </a>
    </Link>
  )
}

export default FailureCard
