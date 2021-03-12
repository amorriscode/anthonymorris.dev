import { useRef, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

import { getAllContent } from '../lib/api'

import { Project, Writing } from '../types'

import withLayout from '../components/withLayout'
import ShowcaseCard from '../components/ShowcaseCard'

function Home({ projects, words }: { projects: Project[]; words: Writing[] }) {
  const headerRef = useRef<HTMLElement>(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const header = headerRef.current

    if (!header) return

    gsap.fromTo(
      header.querySelector('.padding-container'),
      {
        padding: 0,
      },
      {
        padding: '4rem 2.5rem 2.5rem',
        scrollTrigger: {
          trigger: header,
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=100%',
        },
      }
    )

    gsap.fromTo(
      header.querySelector('.bg-container'),
      {
        borderRadius: 0,
        padding: '5rem',
      },
      {
        borderRadius: '1rem',
        padding: '2.5rem',
        scrollTrigger: {
          trigger: header,
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=100%',
        },
      }
    )

    gsap.fromTo(
      document.querySelector('nav'),
      {
        color: '#fbfbfb',
      },
      {
        color: '#1d1d1d',
        scrollTrigger: {
          trigger: header,
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=100%',
        },
      }
    )
  }, [])

  return (
    <>
      <NextSeo
        title="There's no place like /home"
        description="A digital garden and second brain."
        openGraph={{
          title: "There's no place like /home",
          description: 'A digital garden and second brain.',
        }}
      />

      <header ref={headerRef} className="max-w-screen h-screen relative">
        <div className="padding-container w-full h-full">
          <div className="bg-container w-full h-full bg-am-black p-10 text-am-white flex flex-col justify-end overflow-hidden">
            <div className="text-6xl font-am">
              Product-focused software engineer.
            </div>
          </div>
        </div>
      </header>

      <main className="m-10 px-10 space-y-20">
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-am">Projects</h2>

            <Link href="/projects">
              <a className="flex items-center space-x-1 text-sm">
                <span>all projects</span>

                <div className="arrow  transition-all duration-300">
                  <HiOutlineArrowNarrowRight />
                </div>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map(
              ({ title, slug, description, heroImage, status, date }) => (
                <ShowcaseCard
                  key={slug}
                  title={title}
                  href={`/projects/${slug}`}
                  description={description}
                  heroImage={heroImage}
                  status={status}
                  date={date}
                />
              )
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-am">Words</h2>

            <Link href="/words">
              <a className="flex items-center space-x-1 text-sm">
                <span>all writing</span>

                <div className="arrow  transition-all duration-300">
                  <HiOutlineArrowNarrowRight />
                </div>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {words.map(({ title, slug, description, heroImage, date }) => (
              <ShowcaseCard
                key={slug}
                title={title}
                href={`/words/${slug}`}
                description={description}
                heroImage={heroImage}
                date={date}
              />
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        a:hover > .arrow {
          transform: translateX(0.25rem);
        }
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects', [
    'title',
    'slug',
    'description',
    'heroImage',
    'date',
    'status',
  ])

  const words = getAllContent('words', [
    'title',
    'slug',
    'description',
    'heroImage',
    'date',
  ])

  return {
    props: {
      projects: projects.slice(0, 4),
      words: words.slice(0, 4),
    },
  }
}

export default withLayout(Home)
