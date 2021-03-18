import Link from 'next/link'
import { format } from 'date-fns'

import { Failure } from '../types'

function FailureCard({ failure }: { failure: Failure }) {
  return (
    <Link href="/failures/[slug]" as={`/failures/${failure.slug}`} passHref>
      <a className="content-card block">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium mb-1 font-am">
            {failure.title}
          </div>

          <div className="text-xs">
            {format(new Date(failure.date), 'MMMM do, y')}
          </div>
        </div>

        <div className="text-sm">{failure.description}</div>
      </a>
    </Link>
  )
}

export default FailureCard
