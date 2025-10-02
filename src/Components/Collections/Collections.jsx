import React from 'react'
// ------ CSS Imports
import '../Collections/Collections.css'

const Collections = () => {
  return (
    <>
        {/*------ Collections Start ------*/}
          <div className="collections">
            <div className="container">
              <div className="collections-area">
                <div className="collections-texts">
                  <h2>Inspiration Collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="collections-imges">
                  <div className="images">
                    <img src="../public/Images/collections-1.png" alt="collection" />
                  </div>
                  <div className="images">
                    <img src="../public/Images/collections-2.png" alt="collection" />
                  </div>
                  <div className="images">
                    <img src="../public/Images/collections-3.png" alt="collection" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/*------ Collections End ------*/}
    </>
  )
}

export default Collections