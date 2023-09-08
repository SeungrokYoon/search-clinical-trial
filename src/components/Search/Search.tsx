import { useState } from 'react'
import styled from 'styled-components'

import ResultSearchIcon from './ResultSearchIcon'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'
import { selectSearch } from './searchSlice'
import { SickObj } from '../../apis/suggestion'
import useKeyboardNavigation from '../../hooks/useKeyboardNavigation'
import useSuggestion from '../../hooks/useSuggestion'
import { useAppSelector } from '../../store/reduxHooks'

function Search() {
  const [focusedIndex, setFocusedIndex] = useState(-2)
  const { searchTerm } = useAppSelector(selectSearch)
  const { data, fetchData, isLoading, isError } = useSuggestion(searchTerm)
  const { focus, setMouseMove } = useKeyboardNavigation<SickObj>(data)

  return (
    <SearchBox>
      <SearchInput
        changeFocus={(idx: number) => {
          setFocusedIndex(idx)
        }}
        focus={focusedIndex}
        onSearch={fetchData}
      />
      <SearchResult<SickObj>
        data={data}
        error={isError}
        isOpen={focusedIndex === -1}
        loading={isLoading}
        renderItem={(item, index) => (
          <ResultItem>
            <ResultSearchIcon height={18} width={18} />
            <ResultText
              key={item.sickCd}
              $focused={index === focus}
              onMouseEnter={() => setMouseMove(true, index)}
              onMouseLeave={() => {
                setMouseMove(false, -1)
              }}
            >
              {item.sickNm}
            </ResultText>
          </ResultItem>
        )}
      />
    </SearchBox>
  )
}

export default Search

const SearchBox = styled.div`
  max-width: 490px;
  margin: 0 auto;
  width: 100%;
`

const ResultItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 30px;
  & svg {
    fill: ${({ theme }) => theme.color.placeholder};
    margin-right: 10px;
  }
  cursor: pointer;
`

const ResultText = styled.div<{ $focused: boolean }>`
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  background-color: ${({ theme, $focused }) =>
    $focused ? theme.color.keyboardBg : theme.color.white};
`
