import React, { useRef } from 'react'
import { useState, useEffect, useMemo } from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1

  }, [])

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState)
      return prevState + 1
    })
  }

  const getSqrt = (n) => {
    for(let i=0; i< 1000; i++) {
      console.log(i)
    }
    console.log('expensive function called')
    return Math.sqrt(n)
  }

  const sqrt = useMemo(() => getSqrt(number), [number]) 

  return (
    <div>
      <input type="number" value={number} className="form-control w-25" onChange={(e) => {setNumber(e.target.value)}} />
      <h2 className='my-2'>SQRT: {sqrt}</h2>
      <button onClick={onClick} className='btn btn-primary'>Re Render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

export default UseMemoExample
