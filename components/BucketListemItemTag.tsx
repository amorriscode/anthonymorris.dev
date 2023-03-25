function getTagColor(tag: string) {
  switch (tag) {
    case 'Career':
      return {
        text: 'text-blue-300',
        background: 'bg-blue-900',
        border: 'border-blue-700',
      }
    case 'Creative':
      return {
        text: 'text-purple-300',
        background: 'bg-purple-900',
        border: 'border-purple-700',
      }
    case 'Fitness':
      return {
        text: 'text-green-300',
        background: 'bg-green-900',
        border: 'border-green-700',
      }
    case 'Knowledge':
      return {
        text: 'text-pink-300',
        background: 'bg-pink-900',
        border: 'border-pink-700',
      }
    case 'Travel':
      return {
        text: 'text-yellow-300',
        background: 'bg-yellow-900',
        border: 'border-yellow-700',
      }
    default:
      return {
        text: 'text-stone-400',
        background: 'bg-stone-800',
        border: 'border-stone-700',
      }
  }
}

function BucketListItemTag({ tag }: { tag: string }) {
  const { text, background, border } = getTagColor(tag)

  return (
    <div
      className={`text-xs border rounded px-1 ${text} ${background} ${border}`}
    >
      {tag}
    </div>
  )
}

export default BucketListItemTag
