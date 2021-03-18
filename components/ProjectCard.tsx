import Link from 'next/link'

import { Project } from '../types'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href="/projects/[slug]" as={`/projects/${project.slug}`} passHref>
      <a className="content-card block">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium mb-1 font-am">
            {project.title}
          </div>

          <div className="text-xs">{project.status}</div>
        </div>

        <div className="text-sm">{project.description}</div>
      </a>
    </Link>
  )
}

export default ProjectCard
