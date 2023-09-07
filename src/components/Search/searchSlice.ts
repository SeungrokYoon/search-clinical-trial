import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../store/reduxStore'

import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  searchTerm: string
}

const initialState: SearchState = {
  searchTerm: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setSearchTerm } = searchSlice.actions
export const selectSearch = (state: RootState) => state.search

export default searchSlice.reducer
