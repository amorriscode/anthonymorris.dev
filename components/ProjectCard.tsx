import Link from 'next/link'

import { Project } from '../types'

function ProjectCard({ project }: { project: Project }) {
  return (
    (<Link
      href="/projects/[slug]"
      as={`/projects/${project.slug}`}
      passHref
      className="block text-stone-300 hover:text-stone-400 group">

      <div className="flex justify-between items-center">
        <div className="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300">
          {project.title}
        </div>

        <div className="font-fanwood italic text-lg">{project.status}</div>
      </div>
      <div className="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
        {project.description}
      </div>

    </Link>)
  );
}

export default ProjectCard
