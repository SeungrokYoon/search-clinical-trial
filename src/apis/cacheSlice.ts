import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store/reduxStore'

import type { PayloadAction } from '@reduxjs/toolkit'

interface CacheState {
  cache: { [queryKey: string]: any }
}

const initialState: CacheState = {
  cache: {},
}

export const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    addCache: <T>(state: CacheState, action: PayloadAction<{ queryKey: string; value: T[] }>) => {
      state.cache[action.payload.queryKey] = action.payload.value
    },
  },
})

export const { addCache } = cacheSlice.actions
export const selectCache = (state: RootState) => state.cache

export default cacheSlice.reducer
