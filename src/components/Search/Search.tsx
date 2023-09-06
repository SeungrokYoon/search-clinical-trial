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
  return <input />
}

function SearchResultList() {
  return (
    <ul>
      <li>result</li>
    </ul>
  )
}
