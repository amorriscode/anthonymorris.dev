import Link from 'next/link';

import withLayout from '../components/withLayout';

function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-6xl">🕵🏻‍♂️</h1>

      <p>
        Not all those who wander are lost. That being said, I didn't find what you're looking for.
      </p>

      <p>
        Want to <Link href="/"><a>go back home</a></Link>?
      </p>
    </div>
  );   
}

export default withLayout(NotFound);
