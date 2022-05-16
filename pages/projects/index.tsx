import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Project } from '../../types'

import withLayout from '../../components/withLayout'
import ProjectCard from '../../components/ProjectCard'
import PageSummary from '../../components/PageSummary'

function Projects({
  liveProjects,
  hackProjects,
  deadProjects,
}: {
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

      <header>
        <h1 className="text-3xl">Projects</h1>

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
            .{' '}
            <span className="italic font-fanwood text-xl">
              That is where I learned to build
            </span>
            .
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

      <div className="space-y-12">
        <section>
          <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
            Projects still holding on for dear life.
          </p>

          <div className="space-y-8">
            {liveProjects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
            Projects hacked together for fun and prophet.
          </p>

          <div className="space-y-8">
            {hackProjects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
            Press F to pay respects.
          </p>

          <div className="space-y-8">
            {deadProjects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
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

  const liveProjects = getProjectsByStatus(projects, 'live')
  const hackProjects = getProjectsByStatus(projects, 'hack')
  const deadProjects = getProjectsByStatus(projects, 'dead')

  return {
    props: {
      liveProjects,
      hackProjects,
      deadProjects,
    },
  }
}

export default withLayout(Projects)
