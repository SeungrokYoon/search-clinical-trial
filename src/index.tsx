import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage'
import RootPage from './pages/RootPage'
import { CacheContextProvider } from './provider/CacheContextProvider'
import reportWebVitals from './reportWebVitals'
import { store } from './store/reduxStore'

const router = createBrowserRouter([
  { path: '/', element: <RootPage /> },
  { path: '*', element: <NotFoundPage /> },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CacheContextProvider>
        <RouterProvider router={router} />
      </CacheContextProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
