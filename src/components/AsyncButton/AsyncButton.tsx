import styled from 'styled-components'

import BaseButton, { BaseButtonProps } from '../common/BaseButton'

interface AsyncButtonProps extends BaseButtonProps {
  onClick: (...args: any[]) => void
  loading: boolean
  error: boolean
}

function AsyncButton({ children, onClick: func, loading, error, ...props }: AsyncButtonProps) {
  return (
    <StyledBaseButton
      {...props}
      $error={error}
      $loading={loading}
      disabled={loading || error}
      onClick={() => {
        func()
      }}
    >
      {children}
    </StyledBaseButton>
  )
}

export default AsyncButton

const StyledBaseButton = styled(BaseButton)<{ $error: boolean; $loading: boolean }>`
  background-color: ${({ $error, $loading }) => {
    if ($error) {
      return 'red'
    } else if ($loading) {
      return 'gray'
    } else {
      return 'blue'
    }
  }};
`
