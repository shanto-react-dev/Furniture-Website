import React from 'react'
// ------ CSS Imports
import '../Range/Range.css'

const Range = () => {
  return (
    <>
        {/*------ Range Start ------*/}
            <div className="range">
                <div className="container">
                    <div className="range-area">
                        <div className="range-texts">
                            <h2>Browse The Range</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="range-boxs">
                            <div className="range-parts">
                                <div className="range-img">
                                    <img src="/Images/group-4.png" alt="group" />
                                </div>
                                <div className="range-name">
                                    <h4>Dining</h4>
                                </div>
                            </div>
                            <div className="range-parts">
                                <div className="range-img">
                                    <img src="/Images/group-5.png" alt="group" />
                                </div>
                                <div className="range-name">
                                    <h4>Living</h4>
                                </div>
                            </div>
                            <div className="range-parts">
                                <div className="range-img">
                                    <img src="/Images/group-6.png" alt="group" />
                                </div>
                                <div className="range-name">
                                    <h4>Bedroom</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        {/*------ Range End ------*/}
    </>
  )
}

export default Range