import { useRef } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

export const UseLayoutEffect = () => {
  const inputRef = useRef(null)
  useLayoutEffect(() => {
    console.log(inputRef.current.value)
  })
  useEffect(() => {
    inputRef.current.value = 'hello'
  })
  return (
    <div>
      <input ref={inputRef} value="aabid" />
    </div>
  )
}
