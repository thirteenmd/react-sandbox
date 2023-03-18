import React from 'react'
import { useRef } from 'react'

function UseRefExampleOne() {
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={inputRef} className='form-control mb-2' id='name' type="text" />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default UseRefExampleOne
