import { Suspense } from 'react'
import styled from 'styled-components'

import { selectSearch } from './searchSlice'
import { useAppSelector } from '../../store/reduxHooks'

interface SearchResultProps<T> {
  data: T[]
  renderItem: (item: T, index: number) => JSX.Element
  loading: boolean
  error: boolean
  isOpen: boolean
}

function SearchResult<T>({ data, renderItem, isOpen, loading }: SearchResultProps<T>) {
  const { searchTerm } = useAppSelector(selectSearch)
  const searchBarEmpty = searchTerm.length === 0
  const searchTermExistsButDataIsEmpty = !searchBarEmpty && data && data.length === 0

  return (
    <StyledAside className={isOpen ? 'open' : 'hide'}>
      <Suspense fallback={<>fallback</>}>
        <ul>
          {searchBarEmpty && <p>검색어를 입력해보세요</p>}
          {loading ? <>검색중...</> : searchTermExistsButDataIsEmpty ? <p>검색어 없음</p> : ''}
          {!searchBarEmpty && data && data.map((v, i) => renderItem(v, i))}
        </ul>
      </Suspense>
    </StyledAside>
  )
}

export default SearchResult

const StyledAside = styled.aside`
  &.hide {
    display: none;
    background-color: blue;
  }
  &.open {
    background-color: yellow;
  }
`
