import anime from 'animejs'
import { useEffect } from 'react'

export default function ProjectLifeStateLine({
  stat,
  count,
  width,
  duration,
  delay = 0,
}: {
  stat: string
  count: number
  width: string
  duration: number
  delay?: number
}) {
  const statClass = `${stat.toLowerCase().replaceAll(' ', '-')}`

  useEffect(() => {
    anime({
      targets: [`.${statClass}`],
      width,
      duration,
      easing: 'easeInOutQuart',
      delay,
    })
  })

  return (
    <div className="md:grid grid-cols-6">
      <div className="col-span-2 text-sm text-stone-400">{stat}</div>

      <div className="col-span-4 flex items-center">
        <div
          className={`bg-purple-400 text-purple-900 text-sm rounded-lg px-2 h-2 ${statClass}`}
        />
        <div className="min-w-fit ml-2 uppercase text-xs text-purple-400">
          {count} days
        </div>
      </div>
    </div>
  )
}
