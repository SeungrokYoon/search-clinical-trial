import { useCallback, useEffect, useReducer, useState } from 'react'

const INITIAL_INDEX = -2
const KEY_MAP = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ESC: 'Escape',
  ENTER: 'Enter',
}

type State = number
type Action = 'INCREMENT' | 'DECREMENT' | 'RESET' | 'SET'

function useKeyboardNavigation<T>(data: T[]) {
  const [focus, dispatch] = useReducer(reducer, INITIAL_INDEX)
  const [isMouseMoving, setIsMouseMoving] = useState(false)
  const dataLen = data.length

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT', payload: dataLen })
  }
  const onDecrease = () => {
    dispatch({ type: 'DECREMENT', payload: dataLen })
  }
  const onReset = () => {
    dispatch({ type: 'RESET', payload: dataLen })
  }

  const setMouseMove = (to: boolean, index: number) => {
    setIsMouseMoving(to)
    dispatch({ type: 'SET', payload: index })
  }

  const keyboardNavigation = useCallback(
    (e: KeyboardEvent) => {
      if (e.isComposing) return
      if (isMouseMoving) return
      setIsMouseMoving(false)
      switch (e.key) {
        case KEY_MAP.ARROW_DOWN:
          onIncrease()
          break
        case KEY_MAP.ARROW_UP:
          onDecrease()
          break
        case KEY_MAP.ESC:
          onReset()
          break
      }
    },
    [data, focus, isMouseMoving]
  )

  useEffect(() => {
    onReset()
  }, [data])

  useEffect(() => {
    window.addEventListener('keydown', keyboardNavigation)

    return () => {
      window.removeEventListener('keydown', keyboardNavigation)
    }
  }, [keyboardNavigation])

  return { focus, setMouseMove }
}

function reducer(state: State, action: { type: Action; payload: number }): State {
  switch (action.type) {
    case 'INCREMENT':
      return Math.min(state + 1, action.payload - 1) % action.payload
    case 'DECREMENT':
      return Math.max(state - 1, INITIAL_INDEX) % action.payload
    case 'RESET':
      return INITIAL_INDEX
    case 'SET':
      return action.payload
    default:
      throw new Error()
  }
}

export default useKeyboardNavigation
