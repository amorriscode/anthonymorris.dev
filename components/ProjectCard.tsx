import Link from 'next/link';

import { Project } from '../types';

function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <Link href="/projects/[slug]" as={`/projects/${project.slug}`} passHref>
        <a className="project-card col-span-1">
          <div className="project-image mb-2 w-full h-40"></div>

          <div className="project-title font-bold mb-1">
            {project.title}
          </div>

          <div className="text-xs">
            {project.description}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .project-title {
          transition: color 0.15s ease-in;
        }

        .project-card:hover .project-title {
          color: #e200b9;
        }

        .project-image {
          background-position: center;
          background-size: cover;
          background-image: ${project?.image
            ? 'url(' + project.image + ')'
            : 'linear-gradient(45deg, #1f1837, #65285a, #e200b9)'};
        }
      `}</style>
    </>
  );
}

export default ProjectCard;
