import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import NotFoundPage from './pages/NotFoundPage'
import RootPage from './pages/RootPage'
import { CacheContextProvider } from './provider/CacheContextProvider'
import reportWebVitals from './reportWebVitals'
import { store } from './store/reduxStore'
import { Theme } from './style/base/DefaultTheme'
import GlobalStyle from './style/base/GlobalStyle'

const router = createBrowserRouter([
  { path: '/', element: <RootPage /> },
  { path: '*', element: <NotFoundPage errorType="NOT_FOUND" /> },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CacheContextProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </CacheContextProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
