import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { BrainEntry } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'

function BrainEntryPage({
  brainEntry: { slug, content, backlinks },
}: {
  brainEntry: BrainEntry
}) {
  return <>
    <Head>
      <title>{slug} | Anthony Morris</title>
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

    <header>
      <h1 className="text-3xl" title="A piece of my second brain">
        🧠
      </h1>
    </header>

    <article
      className="prose mt-12"
      dangerouslySetInnerHTML={{ __html: content }}
    />

    {!!backlinks.length && (
      <div className="prose rounded-lg border border-stone-800 text-stone-100 bg-opacity-20 bg-stone-800 p-8 mt-12">
        <h2 className="font-am text-2xl font-light text-am-white">
          Backlinks
        </h2>

        <div className="flex flex-wrap justify-between">
          {backlinks.map((backlink) => (
            <Link
              key={backlink}
              href="/second-brain/[slug]"
              as={`/second-brain/${encodeURI(backlink.toLowerCase())}`}
              className="m-2">
              {backlink}
            </Link>
          ))}
        </div>
      </div>
    )}
  </>;
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

  return {
    paths: brainEntries.map(({ slug }) => {
      return {
        params: {
          slug: slug.toLowerCase(),
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(BrainEntryPage)
