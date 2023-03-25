import Link from 'next/link'
import { format } from 'date-fns'

import { BucketListItem } from '../types'
import BucketListItemTag from './BucketListemItemTag'

function BucketListItemContent({
  bucketListItem: { title, tags, completedDate },
}: {
  bucketListItem: BucketListItem
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-medium mb-1 font-am text-stone-100 group-hover:text-stone-400 transition-colors duration-300">
          {title}
        </div>

        {completedDate && (
          <div className="font-fanwood text-lg italic">
            {format(new Date(completedDate), 'MMM do, y')}
          </div>
        )}
      </div>

      {tags.length && (
        <div className="flex space-x-2">
          {tags.map((tag) => (
            <BucketListItemTag key={tag} tag={tag} />
          ))}
        </div>
      )}
    </>
  )
}

function BucketListItemCard({
  bucketListItem,
}: {
  bucketListItem: BucketListItem
}) {
  return bucketListItem.content.length ? (
    <Link
      href="/bucket-list/[slug]"
      as={`/bucket-list/${bucketListItem.slug}`}
      passHref
    >
      <a className="block text-stone-300 hover:text-stone-400 group">
        <BucketListItemContent bucketListItem={bucketListItem} />
      </a>
    </Link>
  ) : (
    <div>
      <BucketListItemContent bucketListItem={bucketListItem} />
    </div>
  )
}

export default BucketListItemCard
