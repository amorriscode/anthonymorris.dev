import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { BrainEntry } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'

function BrainEntryPage({ brainEntry }: { brainEntry: BrainEntry }) {
  return (
    <>
      <Head>
        <title>{brainEntry.slug} | Anthony Morris</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
          integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
          integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <NextSeo
        title="Second Brain 🧠"
        openGraph={{ title: 'Second Brain 🧠' }}
      />

      <header className="mx-auto max-w-3xl space-y-5">
        <h1 className="text-4xl font-am px-10" title="Part of my second brain">
          🧠
        </h1>
      </header>

      <article
        className="prose mx-auto max-w-3xl p-10"
        dangerouslySetInnerHTML={{ __html: brainEntry.content }}
      />

      {!!brainEntry.backlinks.length && (
        <div className="backlink-container prose mx-auto max-w-3xl p-10 bg-am-black text-am-white rounded-lg mb-10">
          <h2 className="font-am text-2xl font-light">Backlinks</h2>

          <div className="flex flex-wrap justify-between">
            {brainEntry.backlinks.map((backlink) => (
              <Link
                key={backlink}
                href="/second-brain/[slug]"
                as={`/second-brain/${backlink}`}
              >
                <a className="m-2">{backlink}</a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const brainEntry = getContentBySlug('second-brain', params?.slug as string, [
    'slug',
    'content',
    'backlinks',
  ])

  const content = await markdownToHtml(brainEntry.content || '')

  return {
    props: {
      brainEntry: {
        ...brainEntry,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const brainEntries = getAllContent('second-brain', ['slug']) as BrainEntry[]

  // Handle lowercase paths (ex. author) and title case (ex. Author)
  const lowerCasePaths = brainEntries.map(({ slug }) => {
    return {
      params: {
        slug: slug.toLowerCase(),
      },
    }
  })

  const titleCasePaths = brainEntries.map(({ slug }) => {
    return {
      params: {
        slug: `${slug[0].toUpperCase()}${slug.substring(1)}`,
      },
    }
  })

  return {
    paths: [...lowerCasePaths, ...titleCasePaths],
    fallback: false,
  }
}

export default withLayout(BrainEntryPage)
