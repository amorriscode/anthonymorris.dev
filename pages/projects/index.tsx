import { GetStaticProps } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import anime from 'animejs'
import { useEffect } from 'react'
import CountUp from 'react-countup'

import { getAllContent } from '../../lib/api'

import { Project } from '../../types'

import withLayout from '../../components/withLayout'
import ProjectCard from '../../components/ProjectCard'
import PageSummary from '../../components/PageSummary'
import ProjectLifeStateLine from '../../components/ProjectLifeStatLine'

type ProjectWithDaysAlive = Project & { daysAlive: number }

function Projects({
  liveProjects,
  hackProjects,
  deadProjects,
  longestLivingProject,
  shortestLivingProject,
  averageLifeOfProjects,
  usersImpacted,
  revenue,
}: {
  liveProjects: Project[]
  hackProjects: Project[]
  deadProjects: Project[]
  longestLivingProject: ProjectWithDaysAlive
  shortestLivingProject: ProjectWithDaysAlive
  averageLifeOfProjects: number
  usersImpacted: number
  revenue: number
}) {
  useEffect(() => {
    anime({
      targets: ['.longest-days-stat-line'],
      width: '100%',
      duration: 2000,
      easing: 'easeInQuart',
    })

    anime({
      targets: ['.shortest-days-stat-line'],
      width: `${
        (shortestLivingProject.daysAlive / longestLivingProject.daysAlive) * 100
      }%`,
      duration: 2000,
      easing: 'easeInQuart',
    })

    anime({
      targets: ['.average-days-stat-line'],
      width: `${
        (averageLifeOfProjects / longestLivingProject.daysAlive) * 100
      }%`,
      duration: 2000,
      easing: 'easeInQuart',
    })
  })

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
            <Link href="/second-brain/programming">programming</Link> .{' '}
            <span className="italic font-fanwood text-xl">
              That is how I learned to build
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

      <section className="mt-6 mb-12 border border-stone-800 bg-opacity-20 bg-stone-800 rounded-lg p-8">
        <p className="text-sm mb-5 text-stone-500 w-full">Stats</p>

        <div className="space-y-2">
          <ProjectLifeStateLine
            stat="Longest living project"
            count={longestLivingProject.daysAlive}
            width="100%"
            duration={2000}
          />

          <ProjectLifeStateLine
            stat="Shortest living project"
            count={shortestLivingProject.daysAlive}
            width={`${
              (shortestLivingProject.daysAlive /
                longestLivingProject.daysAlive) *
              100
            }%`}
            duration={1000}
            delay={700}
          />

          <ProjectLifeStateLine
            stat="Average life of a project"
            count={averageLifeOfProjects}
            width={`${
              (averageLifeOfProjects / longestLivingProject.daysAlive) * 100
            }%`}
            duration={1500}
            delay={1000}
          />
        </div>

        <div className="grid grid-cols-2 mt-8 gap-8">
          <div className="bg-stone-900 border border-stone-800 p-8 rounded-lg flex flex-col items-center justify-center">
            <div className="text-2xl mb-1">
              ~<CountUp end={usersImpacted} />
            </div>
            <div className="text-xs text-stone-400 uppercase">
              humans impacted
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-800 p-8 rounded-lg flex flex-col items-center justify-center">
            <div className="text-2xl mb-1">
              $<CountUp end={revenue} />
            </div>
            <div className="text-xs text-stone-400 uppercase">revenue</div>
          </div>
        </div>
      </section>

      <div className="space-y-12">
        <section>
          <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
            Projects holding on for dear life
          </p>

          <div className="space-y-8">
            {liveProjects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
            Press F to pay respects
          </p>

          <div className="space-y-8">
            {deadProjects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm mb-5 pb-5 border-b border-stone-500 text-stone-500">
            Projects hacked together for fun and prophet
          </p>

          <div className="space-y-8">
            {hackProjects?.map((project) => (
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

function datediff(dateA: Date, dateB: Date) {
  return Math.round((dateB.valueOf() - dateA.valueOf()) / (1000 * 60 * 60 * 24))
}

const getLongestLivingProject = (projects: Project[]) => {
  let longestDaysAlive = -Infinity
  let longestLivingProject = null

  for (const project of projects) {
    const { launchDate, sunsetDate } = project

    const startDate = new Date(launchDate)
    const endDate = sunsetDate ? new Date(sunsetDate) : new Date()

    const daysAlive = datediff(startDate, endDate)

    if (daysAlive > longestDaysAlive) {
      longestDaysAlive = daysAlive
      longestLivingProject = {
        ...project,
        daysAlive,
      }
    }
  }

  return longestLivingProject
}

const getShortestLivingProject = (projects: Project[]) => {
  let shortestDaysAlive = Infinity
  let shortestLivingProject = null

  for (const project of projects) {
    const { launchDate, sunsetDate } = project

    const startDate = new Date(launchDate)
    const endDate = sunsetDate ? new Date(sunsetDate) : new Date()

    const daysAlive = datediff(startDate, endDate)

    if (daysAlive < shortestDaysAlive) {
      shortestDaysAlive = daysAlive
      shortestLivingProject = {
        ...project,
        daysAlive,
      }
    }
  }

  return shortestLivingProject
}

const getAverageLifeOfProjects = (projects: Project[]) => {
  let totalDaysAlive = 0

  for (const project of projects) {
    const { launchDate, sunsetDate } = project

    const startDate = new Date(launchDate)
    const endDate = sunsetDate ? new Date(sunsetDate) : new Date()

    totalDaysAlive += datediff(startDate, endDate)
  }

  return Math.floor(totalDaysAlive / projects.length)
}

const getUsersImpacted = (projects: Project[]) => {
  return projects.reduce((count, { userCount = 0 }) => count + userCount, 0)
}

const getTotalRevenue = (projects: Project[]) => {
  return projects.reduce((count, { revenue = 0 }) => count + revenue, 0)
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects', [
    'title',
    'slug',
    'description',
    'status',
    'launchDate',
    'sunsetDate',
    'userCount',
    'revenue',
  ]) as Project[]

  const liveProjects = getProjectsByStatus(projects, 'live')
  const hackProjects = getProjectsByStatus(projects, 'hack')
  const deadProjects = getProjectsByStatus(projects, 'dead')

  const longestLivingProject = getLongestLivingProject(projects)
  const shortestLivingProject = getShortestLivingProject(projects)
  const averageLifeOfProjects = getAverageLifeOfProjects(projects)
  const usersImpacted = getUsersImpacted(projects)
  const revenue = getTotalRevenue(projects)

  return {
    props: {
      liveProjects,
      hackProjects,
      deadProjects,
      longestLivingProject,
      shortestLivingProject,
      averageLifeOfProjects,
      usersImpacted,
      revenue,
    },
  }
}

export default withLayout(Projects)
