import { ChangeEvent } from 'react'

import { selectSearch, setSearchTerm } from './searchSlice'
import useDebounce from '../../hooks/useDebounce'
import { useAppSelector, useAppDispatch } from '../../store/reduxHooks'
import AsyncButton from '../AsyncButton/AsyncButton'

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
    <label htmlFor="searchInput">
      <input
        name="q"
        placeholder="질환명을 입력해 주세요"
        type="search"
        value={searchTerm}
        onBlur={() => changeFocus(-2)}
        onChange={handleChange}
        onFocus={() => changeFocus(-1)}
        onKeyDown={(e) => e.preventDefault()}
      />
      <AsyncButton
        error={error}
        loading={loading}
        type="button"
        onClick={() => {
          onSearch(searchTerm)
        }}
      >
        검색
      </AsyncButton>
    </label>
  )
}

export default SearchInput
