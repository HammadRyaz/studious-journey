import React from 'react'
import Header from './Header';
import Home from './../pages/Home';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default Layout