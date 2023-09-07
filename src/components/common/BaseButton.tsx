import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styled from 'styled-components'

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

function BaseButton({ children, ...props }: BaseButtonProps) {
  return (
    <StyledButton {...props} type="button">
      {children}
    </StyledButton>
  )
}

export default BaseButton

const StyledButton = styled.button`
  cursor: pointer;
`
