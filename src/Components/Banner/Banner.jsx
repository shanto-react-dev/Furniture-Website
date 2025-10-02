import React from 'react'
// ------ CSS Imports
import '../Banner/Banner.css'
// ------ Link From React-Router
import { Link } from 'react-router'

const Banner = () => {
  return (
    <>
        {/*------ Banner Start ------*/}
            <div className="banner">
                <div className="container">
                    <div className="banner-area">
                        <div className="banner-box">
                            <h4>New Arrival</h4>
                            <h1>Discover Our New Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <div className="button">
                                <Link to={'#'}>BUY Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*------ Banner End ------*/}
    </>
  )
}

export default Banner