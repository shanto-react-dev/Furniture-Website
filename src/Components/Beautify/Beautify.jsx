import React from 'react'
// ------ CSS Imports
import '../Beautify/Beautify.css'
// ------ Link From React-Router
import { Link } from 'react-router'

const Beautify = () => {
  return (
    <>
        {/*------ Beautify Start ------*/}
            <div className="beautify">
                <div className="container">
                    <div className="beautify-area">
                        <div className="beautify-texts">
                            <h3>Beautify Your Space</h3>
                            <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            <div className="button">
                                <Link to={'/'}>Learn More</Link>
                            </div>
                        </div>
                        <div className="beautify-img">
                            <img src="../public/Images/beautify.png" alt="beautify" />
                        </div>
                    </div>
                </div>
            </div>
        {/*------ Beautify End ------*/}
    </>
  )
}

export default Beautify