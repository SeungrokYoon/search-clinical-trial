import { PropsWithChildren } from 'react'
import styled from 'styled-components'

function Header({ children }: PropsWithChildren) {
  return (
    <StyledHeader>
      <div className="header-content">{children}</div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 56px;
  position: static;

  .header-content {
    @media screen and (min-width: 1040px) {
      max-width: 1040px;
    }
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`
