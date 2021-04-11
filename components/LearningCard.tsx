import Link from 'next/link'
import { format } from 'date-fns'

import { Learning } from '../types'

function LearningCard({ learning }: { learning: Learning }) {
  return (
    <Link href="/learnings/[slug]" as={`/learnings/${learning.slug}`} passHref>
      <a className="content-card block">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium mb-1 font-am">
            {learning.title}
          </div>

          <div className="text-xs">
            {format(new Date(learning.date), 'MMMM do, y')}
          </div>
        </div>

        <div className="text-sm">{learning.description}</div>
      </a>
    </Link>
  )
}

export default LearningCard
