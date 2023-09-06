import { ChangeEvent } from 'react'

import { selectSearch, setSearchTerm } from './searchSlice'
import useDebounce from '../../hooks/useDebounce'
import useSuggestion from '../../hooks/useSuggestion'
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'

function Search() {
  return (
    <div>
      <SearchInput />
      <SearchResultList />
    </div>
  )
}

export default Search

function SearchInput() {
  const search = useAppSelector(selectSearch)
  const dispatch = useAppDispatch()
  const { data, fetchData } = useSuggestion('')

  const handleSearch = useDebounce(
    (term: string) => {
      fetchData(term)
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
    <>
      <input value={search.searchTerm} onChange={handleChange} />
      <ul>
        {data.map((v) => (
          <li key={v.sickCd}>{v.sickNm}</li>
        ))}
      </ul>
    </>
  )
}

function SearchResultList() {
  return (
    <ul>
      <li>result</li>
    </ul>
  )
}
