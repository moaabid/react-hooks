import { useReducer } from 'react'
import { useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1, showText: state.showText }
    default:
      break
  }
}

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return <></>
}
