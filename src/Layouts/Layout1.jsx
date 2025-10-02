import React from 'react'
// ------ Outlet From React-Router
import { Outlet } from 'react-router'
// ------ Components Imports
import Header from '../Components/Header/Header'

const Layout1 = () => {
  return (
    <>
      {/*------ Header ------*/}
      <Header />
      {/*------ Outlet ------*/}
      <Outlet />
    </>
  )
}

export default Layout1