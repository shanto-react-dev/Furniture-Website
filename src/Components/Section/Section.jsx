import React from 'react'
// ------ CSS Import
import '../Section/Section.css'

const Section = () => {
  return (
    <>
        {/*------ Section Start ------*/}
            <div className="section">
                <div className="container">
                    <div className="section-area">
                      <div className="section-boxs">
                        <div className="section-img">
                          <img src="../public/Images/group-1.svg" alt="group" />
                        </div>
                        <div className="section-texts">
                          <h3>Free Delivery</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                      <div className="section-boxs">
                        <div className="section-img">
                          <img src="../public/Images/group-2.svg" alt="group" />
                        </div>
                        <div className="section-texts">
                          <h3>Support 24/7</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                      <div className="section-boxs">
                        <div className="section-img">
                          <img src="../public/Images/group-3.svg" alt="group" />
                        </div>
                        <div className="section-texts">
                          <h3>100% Authentic</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        {/*------ Section End ------*/}
    </>
  )
}

export default Section