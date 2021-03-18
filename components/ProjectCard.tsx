import Link from 'next/link'

import { Project } from '../types'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href="/projects/[slug]" as={`/projects/${project.slug}`} passHref>
      <a className="content-card block">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold mb-1">{project.title}</div>

          <div className="text-sm border-b border-buzz-green-neon border-dashed">
            {project.status}
          </div>
        </div>

        <div className="text-sm">{project.description}</div>
      </a>
    </Link>
  )
}

export default ProjectCard
