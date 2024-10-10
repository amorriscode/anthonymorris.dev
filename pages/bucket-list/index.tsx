import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { BucketListItem } from '../../types'

import withLayout from '../../components/withLayout'
import BucketListItemCard from '../../components/BucketListItemCard'
import PageSummary from '../../components/PageSummary'

function BucketList({
  activeBucketListItems,
  pendingBucketListItems,
  completedBucketListItems,
}: {
  activeBucketListItems: BucketListItem[]
  pendingBucketListItems: BucketListItem[]
  completedBucketListItems: BucketListItem[]
}) {
  return <>
    <NextSeo
      title="Bucket List"
      description="A small list of things I hope to do before I die."
      openGraph={{
        title: 'Bucket List',
        description: 'A small list of things I hope to do before I die.',
      }}
    />

    <header>
      <h1 className="text-3xl">Bucket List</h1>

      <PageSummary>
        <p>
          We only have so many weeks to spend in our{' '}
          <Link href="/life">
            life
          </Link>
          . If we&apos;re lucky, we&apos;ll get to live four thousand of them.
          This is a list of things I hope to do during my short time on this
          wonderful planet.
        </p>

        <p>
          My bucket list items are categorized into broad categories of areas
          I&apos;d like to focus on in my life. There are <em>a lot</em> of
          things I&apos;m not focusing on. Perhaps the categories will help me
          broaden my horizons.
        </p>

        <p>
          What are the things you&apos;ve always wanted to do? What&apos;s
          stopping you from doing them?
        </p>
      </PageSummary>
    </header>

    <div className="space-y-12">
      <section>
        <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
          Things I&apos;m currently working on
        </p>

        <div className="space-y-4">
          {activeBucketListItems.map((bucketListItem) => (
            <BucketListItemCard
              key={bucketListItem.slug}
              bucketListItem={bucketListItem}
            />
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
          Maybe I&apos;ll get to these someday
        </p>

        <div className="space-y-4">
          {pendingBucketListItems.map((bucketListItem) => (
            <BucketListItemCard
              key={bucketListItem.slug}
              bucketListItem={bucketListItem}
            />
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
          The minor victories of a mere mortal
        </p>

        <div className="space-y-4">
          {completedBucketListItems.map((bucketListItem) => (
            <BucketListItemCard
              key={bucketListItem.slug}
              bucketListItem={bucketListItem}
            />
          ))}
        </div>
      </section>
    </div>
  </>;
}

export const getStaticProps: GetStaticProps = async () => {
  const bucketListItems = getAllContent('bucket-list', [
    'title',
    'startedDate',
    'completedDate',
    'slug',
    'content',
    'tags',
  ]) as BucketListItem[]

  const activeBucketListItems = bucketListItems
    .filter(({ startedDate }) => startedDate !== undefined)
    .sort((a, b) => a.title.localeCompare(b.title))

  const pendingBucketListItems = bucketListItems
    .filter(
      ({ startedDate, completedDate }) =>
        startedDate === undefined && completedDate == undefined
    )
    .sort((a, b) => a.title.localeCompare(b.title))

  const completedBucketListItems = bucketListItems
    .filter(({ completedDate }) => completedDate !== undefined)
    .sort((a, b) => b.completedDate.localeCompare(a.completedDate))

  return {
    props: {
      activeBucketListItems,
      pendingBucketListItems,
      completedBucketListItems,
    },
  }
}

export default withLayout(BucketList)
