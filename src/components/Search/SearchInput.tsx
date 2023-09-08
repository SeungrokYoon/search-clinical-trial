import { ChangeEvent } from 'react'
import styled from 'styled-components'

import SearchIconButton from './SearchIconButton'
import { selectSearch, setSearchTerm } from './searchSlice'
import useDebounce from '../../hooks/useDebounce'
import { useAppSelector, useAppDispatch } from '../../store/reduxHooks'

const DEBOUNCE_INTERVAL = 1000

interface SearchInputProps {
  loading: boolean
  error: boolean
  onSearch: (searchTerm: string) => Promise<void>
  changeFocus: (idx: number) => void
}

function SearchInput({ loading, error, onSearch, changeFocus }: SearchInputProps) {
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

  return (
    <SearchInputWrapper>
      <Container>
        <InputWrapper>
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
  cursor: pointer;
`

const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`
