import { useState } from 'react'
import styled from 'styled-components'

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
    <div>
      <SearchInput
        changeFocus={(idx: number) => {
          setFocusedIndex(idx)
        }}
        error={isError}
        loading={isLoading}
        onSearch={fetchData}
      />
      <SearchResult<SickObj>
        data={data}
        error={isError}
        isOpen={focusedIndex === -1}
        loading={isLoading}
        renderItem={(item, index) => (
          <StyledLi
            key={item.sickCd}
            $focused={index === focus}
            onMouseEnter={() => setMouseMove(true, index)}
            onMouseLeave={() => {
              setMouseMove(false, -1)
            }}
          >
            {item.sickNm}
          </StyledLi>
        )}
      />
    </div>
  )
}

export default Search

const StyledLi = styled.li<{ $focused: boolean }>`
  background-color: ${({ $focused }) => ($focused ? 'blue' : 'yellow')};
  cursor: pointer;
`
