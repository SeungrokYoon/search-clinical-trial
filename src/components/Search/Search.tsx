import { ChangeEvent, useState } from 'react'

import useDebounce from '../../hooks/useDebounce'
import useSuggestion from '../../hooks/useSuggestion'

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
  const [searchTerm, setSearchTerm] = useState('')
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
    setSearchTerm(value)
    handleSearch(value)
  }

  return (
    <>
      <input value={searchTerm} onChange={handleChange} />
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
