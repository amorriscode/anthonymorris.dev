export type Project = {
  title: string;
  description: string;
  date: string;
  launchDate: string;
  sunsetDate: string;
  content: string;
  slug: string;
  heroImage: string;
  status: string;
  postmortem: string;
}

export type Book = {
  title: string;
  description: string;
  date: string;
  readDate: string;
  content: string;
  slug: string;
  rating: number;
  author: string;
}

export type Failure = {
  title: string;
  description: string;
  date: string;
  content: string;
  slug: string;
  lessons: string[];
}

export type Lesson = {
  title: string;
  failure: string;
}

export type CurrentlyReadingBook = {
  title: string;
  author: string;
  startedDate: string;
  goodreadsUrl: string;
}

export type Learning = {
  title: string;
  description: string;
  date: string;
  content: string;
  slug: string;
  tags: string[];
}

export type Writing = {
  title: string;
  description: string;
  date: string;
  content: string;
  slug: string;
  tags: string[];
  heroImage: string;
}

export type BrainEntry = {
  slug: string;
  content: string;
  backlinks: string[];
}
