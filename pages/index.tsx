import { useRef, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import withLayout from '../components/withLayout'

function Home() {
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
      },
      {
        borderRadius: '1rem',
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

      <main></main>
    </>
  )
}

export default withLayout(Home)
