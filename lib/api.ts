import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { Project, Book, Failure, Learning } from '../types';

const getContentDirectory = (type: string) => join(process.cwd(), `data/${type}`);

export function getSlugs(dir: string) {
  return fs.readdirSync(dir);
}

export function getContentBySlug(
  type: string,
  slug: string,
  fields: string[] = [],
): Project | Book | Failure | Learning {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(getContentDirectory(type), `${realSlug}.md`);
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

  return items as Project | Book | Failure | Learning;
}

export function getAllContent(type: string, fields: string[] = []) {
  const slugs = getSlugs(getContentDirectory(type));

  const content = slugs
    .map(slug => getContentBySlug(type, slug, fields))
    // sort by date in descending order
    .sort((a, b) =>{
      const aCreatedAt = new Date(a.date);
      const bCreatedAt = new Date(b.date);
      return bCreatedAt.getTime() - aCreatedAt.getTime();
    });

  return content as (Project | Book | Failure | Learning)[];
}
