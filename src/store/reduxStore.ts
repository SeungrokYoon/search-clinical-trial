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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
