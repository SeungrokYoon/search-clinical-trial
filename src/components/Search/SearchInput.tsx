import { ChangeEvent } from 'react'
import styled from 'styled-components'

import ResultSearchIcon from './ResultSearchIcon'
import SearchIconButton from './SearchIconButton'
import { selectSearch, setSearchTerm } from './searchSlice'
import useDebounce from '../../hooks/useDebounce'
import { useAppSelector, useAppDispatch } from '../../store/reduxHooks'

const DEBOUNCE_INTERVAL = 1000

interface SearchInputProps {
  focus: number
  onSearch: (searchTerm: string) => Promise<void>
  changeFocus: (idx: number) => void
}

function SearchInput({ focus, onSearch, changeFocus }: SearchInputProps) {
  const { searchTerm } = useAppSelector(selectSearch)
  const dispatch = useAppDispatch()

  const handleSearch = useDebounce(
    (term: string) => {
      onSearch(term)
    },
    DEBOUNCE_INTERVAL,
    []
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    dispatch(setSearchTerm(value))
    handleSearch(value)
  }

  const blurWithEmptyInput = focus < -1 && searchTerm.length === 0

  return (
    <SearchInputWrapper>
      <Container>
        <InputWrapper>
          {blurWithEmptyInput && (
            <PlaceHolderBox>
              <ResultSearchIcon height={18} width={18} />
              질환명을 입력해주세요
            </PlaceHolderBox>
          )}
          <label htmlFor="searchInput">
            <StyledInput
              name="q"
              type="search"
              value={searchTerm}
              onBlur={() => changeFocus(-2)}
              onChange={handleChange}
              onFocus={() => changeFocus(-1)}
            />
          </label>
        </InputWrapper>
        <ButtonWrapper>
          <SearchIconButton
            onClick={() => {
              onSearch(searchTerm)
            }}
          />
        </ButtonWrapper>
      </Container>
    </SearchInputWrapper>
  )
}

export default SearchInput

const SearchInputWrapper = styled.div`
  width: 100%;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid;
  border-color: ${({ theme }) => theme.color.white};
  &:focus-within {
    border-color: ${({ theme }) => theme.color.buttonBg};
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-right: 8px;
`

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 10px 20px 24px;
`

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  font-size: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  caret-color: ${({ theme }) => theme.color.caret};
  cursor: pointer;
`

const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`

const PlaceHolderBox = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.placeholder};
  pointer-events: none;
  width: 100%;
  margin-right: 12px;
  & svg {
    fill: ${({ theme }) => theme.color.placeholder};
    margin-right: 10px;
  }
`
