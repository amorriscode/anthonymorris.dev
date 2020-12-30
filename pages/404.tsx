import Link from 'next/link'
import { NextSeo } from 'next-seo'

import withLayout from '../components/withLayout'

function NotFound() {
  return (
    <>
      <NextSeo
        title="Not Found"
        description="Not all who wander are lost."
        openGraph={{
          title: 'Not Found',
          description: 'Not all who wander are lost.',
        }}
      />

      <div className="space-y-8">
        <h1 className="text-6xl">🕵🏻‍♂️</h1>

        <p>
          Not all who wander are lost. That being said, I didn't find what
          you're looking for.
        </p>

        <p>
          Want to{' '}
          <Link href="/">
            <a>go back home</a>
          </Link>
          ?
        </p>
      </div>
    </>
  )
}

export default withLayout(NotFound)
