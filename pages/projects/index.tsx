import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Project } from '../../types'

import withLayout from '../../components/withLayout'
import ProjectCard from '../../components/ProjectCard'
import PageSummary from '../../components/PageSummary'

function Projects({
  twelveProductsProjects,
  liveProjects,
  hackProjects,
  deadProjects,
}: {
  twelveProductsProjects: Project[]
  liveProjects: Project[]
  hackProjects: Project[]
  deadProjects: Project[]
}) {
  return (
    <>
      <NextSeo
        title="Projects"
        description="My personal Google Graveyard."
        openGraph={{
          title: 'Projects',
          description: 'My personal Google Graveyard.',
        }}
      />

      <header className="mx-auto max-w-3xl space-y-5">
        <h1 className="text-4xl font-am px-10">projects</h1>

        <PageSummary>
          <p>
            My father was always a handyperson. He worked on all sorts of things
            around the house with varying degrees of success (he almost lost his
            fingers in a fight with a table saw).
          </p>

          <p>
            I never got that gift. I was awkward, clumsy, and preferred playing
            on the computer. This lead me to{' '}
            <Link href="/second-brain/programming">
              <a>programming</a>
            </Link>{' '}
            . <span className="italic">That is where I learned to build</span>.
          </p>

          <p>
            This is my collection of projects. Big and small. Software and
            hardware. It&apos;s kind of like my very{' '}
            <a
              href="https://killedbygoogle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Graveyard
            </a>
            .
          </p>
        </PageSummary>
      </header>

      <section className="mx-auto max-w-3xl p-10">
        <p className="text-sm mb-5 pb-5 border-b border-am-black">
          Products built when{' '}
          <a
            className="underline font-bold"
            href="https://alicezhao.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alice Zhao
          </a>{' '}
          and I set out to build{' '}
          <a
            className="underline font-bold"
            href="https://12products.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            a product every month
          </a>
          .
        </p>

        <div className="space-y-10">
          {twelveProductsProjects?.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl p-10">
        <p className="text-sm mb-5 pb-5 border-b border-am-black">
          Projects I&apos;ve built that are still holding on for dear life.
        </p>

        <div className="space-y-10">
          {liveProjects?.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl p-10">
        <p className="text-sm mb-5 pb-5 border-b border-am-black">
          Projects hacked together for fun and prophet.
        </p>

        <div className="space-y-10">
          {hackProjects?.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl p-10">
        <p className="text-sm mb-5 pb-5 border-b border-am-black">
          Press F to pay respects.
        </p>

        <div className="space-y-10">
          {deadProjects?.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

const getProjectsByStatus = (projects: Project[], statusFilter: string) => {
  return projects
    .filter(({ status }) => status === statusFilter)
    .sort((a, b) => b.status.localeCompare(a.status))
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects', [
    'title',
    'date',
    'slug',
    'description',
    'status',
  ]) as Project[]

  const twelveProductsProjects = getProjectsByStatus(projects, '12products')
  const liveProjects = getProjectsByStatus(projects, 'live')
  const hackProjects = getProjectsByStatus(projects, 'hack')
  const deadProjects = getProjectsByStatus(projects, 'dead')

  return {
    props: {
      twelveProductsProjects,
      liveProjects,
      hackProjects,
      deadProjects,
    },
  }
}

export default withLayout(Projects)
