import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'

import { Book } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'
import BookRating from '../../components/BookRating'

function BookPage({
  book: { title, description, author, rating, readDate, content },
}: {
  book: Book
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
        }}
      />

      <header>
        <h1 className="text-3xl">{title}</h1>

        <h2 className="text-base">written by {author}</h2>

        <div className="space-x-2 font-fanwood text-lg italic">
          <span>
            <BookRating rating={rating} />
          </span>

          <span>|</span>

          <span>
            finished reading on {format(new Date(readDate), 'MMMM do, y')}
          </span>
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
  const book = getContentBySlug('books', params?.slug as string, [
    'title',
    'description',
    'readDate',
    'slug',
    'content',
    'rating',
    'author',
  ])

  const content = await markdownToHtml(book.content || '')

  return {
    props: {
      book: {
        ...book,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const books = getAllContent('books', ['slug']) as Book[]

  return {
    paths: books.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(BookPage)
