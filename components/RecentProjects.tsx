import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

import { Project } from '../types'

import ProjectCard from './ProjectCard'

function RecentProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="col-span-1 space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-am">Projects</h2>

        <div className="arrow-link flex items-center space-x-1">
          <Link href="/projects">
            <a className="text-sm">
              <span>all projects</span>
            </a>
          </Link>

          <div className="arrow transition-all duration-300">
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
