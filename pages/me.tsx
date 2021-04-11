import { NextSeo } from 'next-seo'
import Link from 'next/link'

import withLayout from '../components/withLayout'
import PageSummary from '../components/PageSummary'

function Me() {
  return (
    <>
      <NextSeo
        title="Me"
        description="A little bit about me."
        openGraph={{
          title: 'Me',
          description: 'A little bit about me.',
        }}
      />
      <header className="mx-auto max-w-3xl space-y-5">
        <h1 className="text-4xl font-am px-10">me</h1>

        <PageSummary>
          <p>I'm a product-focused software engineer from Vancouver, Canada.</p>

          <p>
            I'm fascinated with the world around us. I love learning about
            things new things and pushing the boundaries of my abilities. My
            mission in life is to have a positive impact with my code.
          </p>

          <p>If any of this sounds interesting, we should chat!</p>

          <p>
            You can find me on{' '}
            <Link href="https://twitter.com/amorriscode">
              <a target="_blank">Twitter</a>
            </Link>
            ,{' '}
            <Link href="https://www.linkedin.com/in/amorriscode/">
              <a target="_blank">LinkedIn</a>
            </Link>
            ,{' '}
            <Link href="https://github.com/amorriscode">
              <a target="_blank">GitHub</a>
            </Link>
            , or{' '}
            <Link href="https://www.goodreads.com/user/show/5171404-anthony">
              <a target="_blank">Good Reads</a>
            </Link>
            .
          </p>
        </PageSummary>
      </header>

      <main className="mx-auto max-w-3xl pb-10 px-10 prose">
        <section>
          <h2>Now</h2>

          <ul>
            <li>
              I'm empowering learners around the world @{' '}
              <Link href="https://monthly.com">
                <a target="_blank">Monthly</a>
              </Link>
            </li>

            <li>
              I'm{' '}
              <Link href="https://github.com/alicelovescake/sheetmenu">
                <a target="_blank">building a tool</a>
              </Link>{' '}
              to help restaurants make a website with Google Sheets
            </li>

            <li>
              I'm learning about{' '}
              <Link href="https://monthly.com/mark-rober-engineering">
                <a target="_blank">creative engineering with Mark Rober</a>
              </Link>
            </li>

            <li>I'm attempting to improve my mobility and strength</li>
          </ul>
        </section>

        <section>
          <h2>Fun Facts</h2>

          <ul>
            <li>I'm left handed</li>

            <li>
              I have{' '}
              <Link href="https://en.wikipedia.org/wiki/Photic_sneeze_reflex">
                <a target="_blank">ACHOO syndrome</a>
              </Link>
            </li>

            <li>
              <Link href="failures/2020-product-failures">
                <a>I built a failed startup</a>
              </Link>
            </li>

            <li>I once consumed nothing but Soylent for 22 days</li>
          </ul>
        </section>

        <section>
          <h2>Talks</h2>

          <ul>
            <li>
              <Link href="https://slides.com/amorriscode/making-fetch-happen">
                <a target="_blank">Making Fetch Happen</a>
              </Link>{' '}
              @ React Vancouver - November 2019
            </li>
          </ul>

          <ul>
            <li>
              <Link href="https://slides.com/amorriscode/how-i-built-a-product-in-3-days">
                <a target="_blank">How I Built a Product in 3 Days</a>
              </Link>{' '}
              @{' '}
              <Link href="https://youtu.be/cDVqhJuTSBo?t=939">
                <a target="_blank">React Vancouver - September 2020</a>
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Interests</h2>

          <ul>
            <li>Blockchain</li>
            <li>Climate change</li>
            <li>Competitive first person shooters</li>
            <li>Dungeons &amp; Dragons</li>
            <li>Gymnastics</li>
            <li>Hiking</li>
            <li>Making music</li>
            <li>Meditation</li>
            <li>Photography</li>
            <li>Playing Go</li>
            <li>Power lifting</li>
            <li>Product development and design</li>
            <li>Pruning my digital garden</li>
            <li>Reading</li>
            <li>Robotics</li>
            <li>Self-development</li>
            <li>Space</li>
            <li>Stoicism</li>
            <li>Tennis</li>
            <li>Wes Anderson films</li>
            <li>Working on open source</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default withLayout(Me)
