import { useRef } from 'react'
import { Button } from './Button'

export const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null)
  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Parent Button
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}
