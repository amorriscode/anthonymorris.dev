import Link from 'next/link'
import { format } from 'date-fns'

import { Learning } from '../types'

function LearningCard({ learning }: { learning: Learning }) {
  return (
    <>
      <Link href="/til/[slug]" as={`/til/${learning.slug}`} passHref>
        <a className="content-card block">
          <div className="flex justify-between items-center">
            <div className="learning-title text-lg font-bold mb-1">
              {learning.title}
            </div>

            <div className="text-sm border-b border-buzz-green-neon border-dashed">
              {format(new Date(learning.date), 'MMMM do, y')}
            </div>
          </div>

          <div className="text-sm">{learning.description}</div>
        </a>
      </Link>

      <style jsx>{`
        .learning-title {
          transition: color 0.15s ease-in;
        }

        .content-card:hover .learning-title {
          color: #e200b9;
        }
      `}</style>
    </>
  )
}

export default LearningCard
