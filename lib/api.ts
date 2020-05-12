import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { Project } from '../types';

const projectsDirectory = join(process.cwd(), 'data/projects');

export function getSlugs(dir: string) {
  return fs.readdirSync(dir);
}

export function getProjectBySlug(slug: string, fields: string[] = []): Project {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: {
    [key: string]: string;
  } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  })

  return items as Project;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getSlugs(projectsDirectory);
  const projects = slugs
    .map(slug => getProjectBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((a, b) =>{
      const aCreatedAt = new Date(a.date);
      const bCreatedAt = new Date(b.date);
      return bCreatedAt.getTime() - aCreatedAt.getTime();
    });

  return projects;
}
