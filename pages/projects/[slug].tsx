import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

import { Project } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'
import PageSummary from '../../components/PageSummary'

function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <NextSeo
        title={project.title}
        description={project.description}
        openGraph={{
          title: project.title,
          description: project.description,
        }}
      />

      <header className="mx-auto max-w-3xl space-y-5">
        {project?.heroImage && (
          <div className="mb-4 mx-auto h-64 sm:h-96 max-w-4xl rounded-lg relative overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={project.blurDataURL}
            />
          </div>
        )}

        <div className="px-10">
          <h1 className="font-am text-4xl">{project.title}</h1>

          <div className="text-xs space-x-2">
            <span>{project.status}</span>

            {project?.launchDate && (
              <>
                <span>|</span>
                <span>
                  launched {format(new Date(project.launchDate), 'MMMM do, y')}
                </span>
              </>
            )}

            {project?.sunsetDate && (
              <>
                <span>|</span>
                <span>
                  retired {format(new Date(project.sunsetDate), 'MMMM do, y')}
                </span>
              </>
            )}
          </div>
        </div>

        {project?.sunsetDate && (
          <PageSummary>
            {project.title} has been laid to rest in my product graveyard.
            {project?.postmortem && (
              <>
                {' '}
                <Link href={project.postmortem}>
                  <a>Read the postmortem</a>
                </Link>
                .
              </>
            )}
          </PageSummary>
        )}
      </header>

      <article
        className="prose mx-auto max-w-3xl p-10"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getContentBySlug('projects', params?.slug as string, [
    'title',
    'description',
    'date',
    'launchDate',
    'sunsetDate',
    'slug',
    'content',
    'image',
    'status',
    'postmortem',
    'heroImage',
  ]) as Project

  const content = await markdownToHtml(project.content || '')

  const { base64 = '' } = project.heroImage
    ? await getPlaiceholder(project.heroImage, { size: 4 })
    : {}

  return {
    props: {
      project: {
        ...project,
        content,
        blurDataURL: base64,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllContent('projects', ['slug']) as Project[]

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(ProjectPage)
