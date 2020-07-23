import Link from 'next/link';
import { format } from 'date-fns';

import { Writing } from '../types';

function WritingCard({ writing }: { writing: Writing }) {
  return (
    <>
      <Link href="/words/[slug]" as={`/words/${writing.slug}`} passHref>
        <a className="content-card block">
          <div className="flex justify-between items-center">
            <div className="writing-title text-lg font-bold mb-1">
              {writing.title}
            </div>

            <div className="text-sm border-b border-buzz-green-neon border-dashed">
              {format(new Date(writing.date), 'MMMM do, y')}
            </div>
          </div>

          <div className="text-sm">
            {writing.description}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .writing-title {
          transition: color 0.15s ease-in;
        }

        .content-card:hover .writing-title {
          color: #e200b9;
        }
      `}</style>
    </>
  );
}

export default WritingCard;
