import React from 'react'
import { useEffect, useState, useRef } from 'react'

function UseRefExampletwo() {
  const renders = useRef(1)
  const prevName = useRef('')
  const [name, setName] = useState('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h1>Previus name: {prevName.current}</h1>
      <input type="text" className='form-control mb-3' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default UseRefExampletwo
