import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './../components/Layout';
import Vans from './../pages/Vans/Vans';
import About from './../pages/About';
import Home from './../pages/Home';

const App = () => {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App