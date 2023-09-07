import { ChangeEvent } from 'react'

import { selectSearch, setSearchTerm } from './searchSlice'
import useDebounce from '../../hooks/useDebounce'
import useSuggestion from '../../hooks/useSuggestion'
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'
import AsyncButton from '../AsyncButton/AsyncButton'

function Search() {
  const { data, fetchData, isLoading, isError } = useSuggestion('')
  return (
    <div>
      <SearchInput error={isError} loading={isLoading} onSearch={fetchData} />
      <SearchResultList data={data} error={isError} loading={isLoading} />
    </div>
  )
}

export default Search

interface SearchInputProps {
  loading: boolean
  error: boolean
  onSearch: (searchTerm: string) => Promise<void>
}

function SearchInput({ loading, error, onSearch }: SearchInputProps) {
  const search = useAppSelector(selectSearch)
  const dispatch = useAppDispatch()

  const handleSearch = useDebounce(
    (term: string) => {
      onSearch(term)
    },
    500,
    []
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    dispatch(setSearchTerm(value))
    handleSearch(value)
  }

  return (
    <label htmlFor="searchInput">
      <input type="text" value={search.searchTerm} onChange={handleChange} />
      <AsyncButton
        error={error}
        loading={loading}
        type="button"
        onClick={() => {
          onSearch(search.searchTerm)
        }}
      >
        검색
      </AsyncButton>
    </label>
  )
}

interface SearchResultListProps {
  data: any[]
  loading: boolean
  error: boolean
}

function SearchResultList({ data }: SearchResultListProps) {
  return (
    <aside>
      <ul>
        {data.length === 0 && <p>검색어 없음</p>}
        {data.map((v) => (
          <li key={v.sickCd} tabIndex={0}>
            {v.sickNm}
          </li>
        ))}
      </ul>
    </aside>
  )
}
