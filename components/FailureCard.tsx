import Link from 'next/link';
import { format } from 'date-fns';

import { Failure } from '../types';

function FailureCard({ failure }: { failure: Failure }) {
  return (
    <>
      <Link href="/failures/[slug]" as={`/failures/${failure.slug}`} passHref>
        <a className="content-card block">
          <div className="flex justify-between items-center">
            <div className="failure-title text-lg font-bold mb-1">
              {failure.title}
            </div>

            <div className="text-sm border-b border-buzz-green-neon border-dashed">
              {format(new Date(failure.date), 'MMMM do, y')}
            </div>
          </div>

          <div className="text-sm">
            {failure.description}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .failure-title {
          transition: color 0.15s ease-in;
        }

        .content-card:hover .failure-title {
          color: #e200b9;
        }
      `}</style>
    </>
  );
}

export default FailureCard;
