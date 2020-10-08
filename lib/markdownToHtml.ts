import remark from 'remark'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'
import highlight from 'rehype-highlight'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(math)
    .use(remark2rehype)
    .use(katex)
    .use(stringify)
    .use(highlight)
    .process(markdown)

  return result.toString()
}