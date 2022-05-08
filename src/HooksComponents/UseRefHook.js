import { useRef } from 'react'

export const UseRefHook = () => {
  const inputRef = useRef(null)

  const changeName = () => {
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div>
      <h1>Use ref hook</h1>
      <input type="text" placeholder="Ex.." ref={inputRef}></input>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}
