import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getAllContent } from '../../lib/api'

import { Project } from '../../types'

import withLayout from '../../components/withLayout'
import ProjectCard from '../../components/ProjectCard'
import PageSummary from '../../components/PageSummary'

function Projects({ projects }: { projects: Project[] }) {
  projects.sort((a, b) => b.status.localeCompare(a.status))

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

      <main className="mx-auto max-w-3xl space-y-10 p-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects', [
    'title',
    'date',
    'slug',
    'description',
    'status',
  ])

  return {
    props: {
      projects,
    },
  }
}

export default withLayout(Projects)
