import { useContext } from 'react'
import { AppContext } from './UseContextHook'

export const Login = () => {
  const { setUserName } = useContext(AppContext)
  return (
    <>
      <input
        onChange={(event) => {
            setUserName(event.target.value)
        }}
      />
    </>
  )
}
