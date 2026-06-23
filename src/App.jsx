import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './../components/Layout';

const App = () => {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Layout />}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App