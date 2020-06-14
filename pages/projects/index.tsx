import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getAllContent } from '../../lib/api';

import { Project } from '../../types';

import withLayout from '../../components/withLayout';
import ProjectCard from '../../components/ProjectCard';

function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="container">
      <Head>
        <title>projects | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">
          Projects
        </h1>

        {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects', [
    'title',
    'date',
    'slug',
    'description',
    'status',
  ]);

  return {
    props: {
      projects,
    },
  }
}

export default withLayout(Projects);
