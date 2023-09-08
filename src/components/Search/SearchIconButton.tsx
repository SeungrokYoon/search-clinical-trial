import styled from 'styled-components'

import SearchIcon from './SearchIcon'

function SearchIconButton({ onClick }: { onClick: () => void }) {
  return (
    <SearchButton type="button" onClick={onClick}>
      <SearchButtonImgBox>
        <SearchIcon />
      </SearchButtonImgBox>
    </SearchButton>
  )
}

export default SearchIconButton

const SearchButton = styled.button`
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.buttonBg};
  cursor: pointer;
`

const SearchButtonImgBox = styled.div`
  width: 21px;
  height: 21px;
`
