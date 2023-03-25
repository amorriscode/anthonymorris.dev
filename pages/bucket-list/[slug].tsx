import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import { BucketListItem, Writing } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'
import BucketListItemTag from '../../components/BucketListemItemTag'

function BucketListPage({
  bucketListItem: { title, content, completedDate, tags, startedDate },
}: {
  bucketListItem: BucketListItem
}) {
  const description = `Before I die, I hope to ${title.toLocaleLowerCase()}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description: description,
        }}
      />

      <header>
        <div>
          <h1 className="text-4xl font-am mb-2">{title}</h1>

          {startedDate && !completedDate && (
            <div className="font-fanwood italic text-lg mb-2">
              started {format(new Date(startedDate), 'MMMM do, y')}
            </div>
          )}

          {completedDate && (
            <div className="font-fanwood italic text-lg mb-2">
              completed {format(new Date(completedDate), 'MMMM do, y')}
            </div>
          )}

          {tags.length && (
            <div className="flex space-x-2">
              {tags.map((tag) => (
                <BucketListItemTag key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </header>

      <article
        className="prose mt-12"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bucketListItem = getContentBySlug(
    'bucket-list',
    params?.slug as string,
    ['title', 'startedDate', 'completedDate', 'slug', 'content', 'tags']
  ) as BucketListItem

  const content = await markdownToHtml(bucketListItem.content || '')

  return {
    props: {
      bucketListItem: {
        ...bucketListItem,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const bucketListItems = getAllContent('bucket-list', [
    'slug',
  ]) as BucketListItem[]

  return {
    paths: bucketListItems.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(BucketListPage)
