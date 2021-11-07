import { useRef, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

// @TODO sort out gsap type/import issues
// @ts-ignore
import { gsap } from 'gsap/dist/gsap'
// @ts-ignore
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { getAllContent } from '../lib/api'

import { Project, Writing } from '../types'

import withLayout from '../components/withLayout'
import RecentProjects from '../components/RecentProjects'
import RecentWords from '../components/RecentWords'
import GameOfLife from '../components/GameOfLife'

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
    <div>
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
          <div className="bg-container relative w-full h-full bg-am-black p-10 text-am-white flex flex-col justify-end overflow-hidden">
            <GameOfLife />

            <div className="text-6xl font-am">
              Product-focused software engineer.
            </div>
          </div>
        </div>
      </header>

      <main className="m-10 px-10 space-y-20">
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-28 xl:gap-56 space-y-28 md:space-y-0">
          <RecentProjects projects={projects} />

          <RecentWords words={words} />
        </section>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects', [
    'title',
    'slug',
    'description',
    'date',
    'status',
  ])

  const words = getAllContent('words', ['title', 'slug', 'description', 'date'])

  return {
    props: {
      projects: projects.slice(0, 4),
      words: words.slice(0, 4),
    },
  }
}

export default withLayout(Home)
