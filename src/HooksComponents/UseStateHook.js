import { useState } from 'react'

export const UseStateHook = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      <div>
        <input
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <p>{name}</p>
      </div>
    </>
  )
}
