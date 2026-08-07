import { NextApiRequest, NextApiResponse } from 'next'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, description } = req.query as { title: string; description: string }

  const svg = await satori(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#1c1917',
        padding: '60px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '64px', color: '#f5f5f4', fontWeight: 700, margin: 0 }}>{title}</h1>
      <p style={{ fontSize: '32px', color: '#d6d3d1', marginTop: '20px' }}>{description}</p>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [],
    }
  )

  const resvg = new Resvg(svg)
  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  res.setHeader('Content-Type', 'image/png')
  res.status(200).send(pngBuffer)
}
