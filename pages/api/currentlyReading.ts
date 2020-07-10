import { NextApiRequest, NextApiResponse } from 'next';
import { parseStringPromise } from 'xml2js';

import { CurrentlyReadingBook } from '../../types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { GOODREADS_KEY, GOODREADS_USER_ID } = process.env;

  const readingShelf = await fetch(`https://www.goodreads.com/review/list/${GOODREADS_USER_ID}.xml?key=${GOODREADS_KEY}&v=2&shelf=currently-reading&sort=date_read`);

  const parsedReadingShelf = await parseStringPromise(await readingShelf.text());

  const currentlyReading: CurrentlyReadingBook[] = [];
  
  parsedReadingShelf?.GoodreadsResponse?.reviews[0]?.review.forEach((review: any) => {
    currentlyReading.push({
      title: review?.book[0]?.title_without_series[0].split(':')[0],
      author: review?.book[0]?.authors[0]?.author[0]?.name[0],
      startedDate: review?.started_at[0],
      goodreadsUrl: review?.book[0]?.link[0],
    })
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ currentlyReading }));
}