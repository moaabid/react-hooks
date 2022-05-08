import axios from 'axios'
import { useEffect, useState } from 'react'

export const UseEffectHook = () => {
  const [data, setData] = useState('')
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((reponse) => {
        setData(reponse.data[0].email)
      })
  }, [])
  return (
    <div>
      {data} <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}
