import { useRef, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
import { format } from 'date-fns'

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
        <section className="grid grid-cols-2 gap-56">
          <div className="col-span-1 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-am">Projects</h2>

              <div className="arrow-link flex items-center space-x-1">
                <Link href="/projects">
                  <a className="text-sm">
                    <span>all projects</span>
                  </a>
                </Link>

                <div className="arrow transition-all duration-300">
                  <HiOutlineArrowNarrowRight />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {projects.map(({ title, slug, description, status }) => (
                <Link key={slug} href={`/projects/${slug}`}>
                  <a className="block">
                    <div className="flex justify-between items-center">
                      <div className="font-am font-medium">{title}</div>
                      <div className="text-xs">{status}</div>
                    </div>

                    <div className="text-sm">{description}</div>
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-am">Words</h2>

              <div className="arrow-link flex items-center space-x-1">
                <Link href="/words">
                  <a className="text-sm">
                    <span>all writing</span>
                  </a>
                </Link>

                <div className="arrow transition-all duration-300">
                  <HiOutlineArrowNarrowRight />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {words.map(({ title, slug, description, heroImage, date }) => (
                <Link key={slug} href={`/words/${slug}`}>
                  <a className="block">
                    <div className="flex justify-between items-center">
                      <div className="font-am font-medium">{title}</div>

                      <div className="text-xs">
                        {format(new Date(date), 'MMM d, y')}
                      </div>
                    </div>

                    <div className="text-sm">{description}</div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects', [
    'title',
    'slug',
    'description',
    'date',
    'status',
    'heroImage',
  ])

  const words = getAllContent('words', [
    'title',
    'slug',
    'description',
    'date',
    'heroImage',
  ])

  return {
    props: {
      projects: projects.slice(0, 4),
      words: words.slice(0, 4),
    },
  }
}

export default withLayout(Home)
