import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'

import cacheSlice from '../apis/cacheSlice'
import searchSlice from '../components/Search/searchSlice'

const rootReducer = combineReducers({
  search: searchSlice,
  cache: cacheSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
