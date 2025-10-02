import React from 'react'
// ------ CSS Imports
import '../Works/Works.css'

const Works = () => {
  return (
    <>
        {/*------ Works Start ------*/}
            <div className="works">
                <div className="container">
                    <div className="works-area">
                        <div className="works-header">
                            <h2>How It Works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="works-boxs">
                            <div className="works-parts">
                                <div className="works-img">
                                    <img src="/Images/work-1.png" alt="work" />
                                </div>
                                <div className="works-texts">
                                    <h4>Purchase Securely</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="works-parts">
                                <div className="works-img">
                                    <img src="/Images/work-2.png" alt="work" />
                                </div>
                                <div className="works-texts">
                                    <h4>Ships From Warehouse</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="works-parts">
                                <div className="works-img">
                                    <img src="/Images/work-3.png" alt="work" />
                                </div>
                                <div className="works-texts">
                                    <h4>Style Your Room</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*------ Works End ------*/}
    </>
  )
}

export default Works