import { useEffect, useRef } from 'react'

import useOnClickOutside from '../hooks/useOnClickOutside'

function Search({ handleSearchClose }: { handleSearchClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // @ts-ignore
    if (window.stork) {
      //@ts-ignore
      window.stork.register('amorriscode', '/search-index.st')
    }
  }, [])

  const handleClose = () => {
    if (handleSearchClose) {
      handleSearchClose()
    }
  }

  useOnClickOutside(ref, handleClose)

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen z-50 bg-am-black bg-opacity-20 pt-48">
      <div className="relative w-1/2 mx-auto shadow-2xl" ref={ref}>
        <input
          className="rounded-lg p-5 w-full"
          data-stork="amorriscode"
          placeholder="What are you looking for?"
        />
        <div
          className="rounded-b-lg -mt-2"
          data-stork="amorriscode-output"
        ></div>
      </div>
    </div>
  )
}

export default Search
