import { useContext } from 'react'
import { AppContext } from './UseContextHook'

export const User = () => {
  const { userName } = useContext(AppContext)
  return (
    <div>
      <p>User: {userName}</p>
    </div>
  )
}
