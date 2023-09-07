import { ChangeEvent, Suspense, useState } from 'react'
import styled from 'styled-components'

import { selectSearch, setSearchTerm } from './searchSlice'
import { SickObj } from '../../apis/sick'
import useDebounce from '../../hooks/useDebounce'
import useSuggestion from '../../hooks/useSuggestion'
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'
import AsyncButton from '../AsyncButton/AsyncButton'

const DEBOUNCE_INTERVAL = 1000

function Search() {
  const [focusedIndex, setFocusedIndex] = useState(-2)
  const { searchTerm } = useAppSelector(selectSearch)
  const { data, fetchData, isLoading, isError } = useSuggestion(searchTerm)

  return (
    <div>
      <SearchInput
        changeFocus={(idx: number) => {
          setFocusedIndex(idx)
        }}
        error={isError}
        loading={isLoading}
        onSearch={fetchData}
      />
      <SearchResultList<SickObj>
        data={data}
        error={isError}
        isOpen={focusedIndex === -1}
        loading={isLoading}
        renderItem={(item) => <li key={item.sickCd}>{item.sickNm}</li>}
      />
    </div>
  )
}

export default Search

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

interface SearchResultListProps<T> {
  data: T[]
  renderItem: (item: T) => JSX.Element
  loading: boolean
  error: boolean
  isOpen: boolean
}

function SearchResultList<T>({ data, renderItem, isOpen, loading }: SearchResultListProps<T>) {
  const { searchTerm } = useAppSelector(selectSearch)
  const searchBarEmpty = searchTerm.length === 0
  const searchTermExistsButDataIsEmpty = !searchBarEmpty && data && data.length === 0

  return (
    <StyledAside className={isOpen ? 'open' : 'hide'}>
      <Suspense fallback={<>fallback</>}>
        <ul>
          {searchBarEmpty && <p>검색어를 입력해보세요</p>}
          {loading ? <>검색중...</> : searchTermExistsButDataIsEmpty ? <p>검색어 없음</p> : ''}
          {!searchBarEmpty && data && data.map((v) => renderItem(v))}
        </ul>
      </Suspense>
    </StyledAside>
  )
}

const StyledAside = styled.aside`
  &.hide {
    display: none;
    background-color: blue;
  }
  &.open {
    background-color: yellow;
  }
`
