import React from 'react'
import Todo from './Todo'
import { useState } from 'react'

function UseRefExampleThree() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
      {showTodo && <Todo />}
      <button className='btn btn-primary' onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
    </div>
  )
}

export default UseRefExampleThree
