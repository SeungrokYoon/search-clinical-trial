import styled from 'styled-components'

import BaseButton, { BaseButtonProps } from '../common/BaseButton'

interface AsyncButtonProps extends BaseButtonProps {
  onClick: (...args: any[]) => void
  loading: boolean
  error: boolean
}

function AsyncButton({ children, onClick: func, loading, error, ...props }: AsyncButtonProps) {
  return (
    <BaseButton
      onClick={() => {
        func()
      }}
    >
      {children}
    </BaseButton>
  )
}

export default AsyncButton
