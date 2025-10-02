import React from 'react'
// ------ CSS Import
import '../Header/Header.css'
// ------ Link From React-Router
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      {/*------ Header Start ------*/}
        <div className="header">
          <div className="container">
            <div className="header-area">
              <div className="header-logo">
                <img src="/Images/logo.png" alt="logo" />
              </div>
              <div className="header-menu">
                <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/'}>Services</Link></li>
                  <li><Link to={'/'}>Doctors</Link></li>
                  <li><Link to={'/'}>Products</Link></li>
                  <li><Link to={'/'}>Gallery</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/*------ Header End ------*/}
    </>
  )
}

export default Header