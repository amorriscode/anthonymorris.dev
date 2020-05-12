import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getAllProjects } from '../../lib/api';

import { Project } from '../../types';

import withLayout from '../../components/withLayout';
import ProjectCard from '../../components/ProjectCard';

function Projects({ projects }: { projects: Project[] }) {
  console.log(projects);
  return (
    <div className="container">
      <Head>
        <title>projects | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <div className="grid grid-cols-2 col-gap-4 row-gap-6">
          {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </main>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects([
    'title',
    'date',
    'slug',
    'description',
    'image',
  ]);

  return {
    props: {
      projects,
    },
  }
}

export default withLayout(Projects);
