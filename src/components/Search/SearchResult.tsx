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
    <Wrapper>
      <StyledAside className={isOpen ? 'open' : 'hide'}>
        {searchBarEmpty && (
          <>
            <SearchMainText>최근 검색어</SearchMainText>
            <SearchSubText>최근 검색어가 없습니다</SearchSubText>
            <HorizontalDivider />
          </>
        )}
        {searchBarEmpty && <SearchMainText>추천 검색어로 검색해보세요</SearchMainText>}
        {!searchBarEmpty && data && <SearchMainText>추천 검색어</SearchMainText>}
        {loading ? (
          <SearchSubText>검색중...</SearchSubText>
        ) : searchTermExistsButDataIsEmpty ? (
          <SearchSubText>검색어 없음</SearchSubText>
        ) : (
          ''
        )}
        <StyledUl>
          {!searchBarEmpty && !loading && data && data.map((v, i) => renderItem(v, i))}
        </StyledUl>
      </StyledAside>
    </Wrapper>
  )
}

export default SearchResult

const Wrapper = styled.div`
  position: relative;
`

const StyledAside = styled.aside`
  &.hide {
    display: none;
  }
  &.open {
    position: absolute;
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    margin-top: 7px;
    padding: 30px 0px;
    min-height: 240px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 0.5px ${({ theme }) => theme.color.shadow};
    text-align: left;
  }
`

const SearchMainText = styled.div`
  color: ${({ theme }) => theme.color.searchTitleText};
  font-size: ${({ theme }) => theme.fontSize.default};
  margin: 10px 0;
  padding-left: 30px;
`

const SearchSubText = styled(SearchMainText)`
  color: ${({ theme }) => theme.color.textColor};
`

const HorizontalDivider = styled.hr`
  height: 1px;
  background: ${({ theme }) => theme.color.divider};
  margin: 20px 0 30px;
  border: 0;
`

const StyledUl = styled.ul`
  max-height: 344px;
  overflow-y: auto;
`
