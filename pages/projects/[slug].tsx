import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'

import { Project } from '../../types'

import markdownStyles from '../../styles/markdown-styles.module.css'
import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'

function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <Head>
        <title>{project.title} | Anthony Morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        {project?.image && (
          <img className="mb-4" src={project.image} alt={project.title} />
        )}

        <h1 className="leading-none">{project.title}</h1>

        <article className="space-y-8">
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

          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </article>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getContentBySlug('projects', params?.slug as string, [
    'title',
    'date',
    'launchDate',
    'sunsetDate',
    'slug',
    'content',
    'image',
    'status',
  ])

  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
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
