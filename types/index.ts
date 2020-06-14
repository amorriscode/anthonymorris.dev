export type Project = {
  title: string;
  description: string;
  date: string;
  launchDate: string;
  content: string;
  slug: string;
  image: string;
  status: string;
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
}
