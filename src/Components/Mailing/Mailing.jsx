import React from 'react'
// ------ CSS Imports
import '../Mailing/Mailing.css'
import { Link } from 'react-router'

const Mailing = () => {
  return (
    <>
        {/*------ Mailing Start ------*/}
            <div className="mailing">
                <div className="container">
                    <div className="mailing-area">
                        <div className="mailing-header">
                            <h2>Join Our Mailing List</h2>
                            <p>Sign up to receive inspiration, product updates, and special offers from our team.</p>
                        </div>
                        <div className="mailing-input">
                            <input type="email" placeholder='example@gmail.com' />
                            <div className="button">
                                <Link to={'/'}>Submit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*------ Mailing End ------*/}
    </>
  )
}

export default Mailing