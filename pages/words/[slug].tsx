import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import { Writing } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'

function WordPage({
  writing: { title, description, heroImage, blurDataURL, content, date },
}: {
  writing: Writing
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
        }}
      />

      <header>
        {heroImage && (
          <div>
            <div className="mb-10 mx-auto h-64 sm:h-96 max-w-4xl rounded-lg relative overflow-hidden">
              <Image
                src={heroImage}
                layout="fill"
                objectFit="cover"
                alt=""
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
          </div>
        )}

        <div>
          <h1 className="text-4xl font-am mb-2">{title}</h1>

          <div className="font-fanwood italic text-lg">
            written {format(new Date(date), 'MMMM do, y')}
          </div>
        </div>
      </header>

      <article
        className="prose py-10"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const writing = getContentBySlug('words', params?.slug as string, [
    'title',
    'description',
    'date',
    'slug',
    'content',
    'tags',
    'heroImage',
  ]) as Writing

  const content = await markdownToHtml(writing.content || '')

  const { base64 = '' } = writing.heroImage
    ? await getPlaiceholder(writing.heroImage, { size: 4 })
    : {}

  return {
    props: {
      writing: {
        ...writing,
        content,
        blurDataURL: base64,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const words = getAllContent('words', ['slug']) as Writing[]

  return {
    paths: words.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(WordPage)
