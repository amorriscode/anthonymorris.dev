import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { format } from 'date-fns';

import { Project } from '../../types';

import markdownStyles from '../../styles/markdown-styles.module.css';
import markdownToHtml from '../../lib/markdownToHtml';
import { getProjectBySlug, getAllProjects } from '../../lib/api';

import withLayout from '../../components/withLayout';

function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <Head>
        <title>{project.title.toLowerCase()} | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <article>
        {project?.image && <img className="mb-4" src={project.image} alt={project.title} />}

        <h1>
          {project.title}
        </h1>

        {project?.launchDate && (
          <div className="text-xs">
            Launched on {format(new Date(project.launchDate), 'MMMM do, y')}
          </div>
        )}

        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getProjectBySlug(params?.slug as string, [
    'title',
    'date',
    'launchDate',
    'slug',
    'content',
    'image',
  ]);

  const content = await markdownToHtml(project.content || '');

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjects(['slug']) as Project[];

  return {
    paths: projects.map(project => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(ProjectPage);
