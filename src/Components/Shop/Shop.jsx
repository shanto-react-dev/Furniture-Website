import React from 'react'
// ------ CSS Imports
import '../Shop/Shop.css'

const Shop = () => {
  return (
    <>
        {/*------ Beautify Start ------*/}
            <div className="shop">
                <div className="container">
                    <div className="shop-area">
                        <div className="care-part">
                            <div className="care-texts">
                                <h4>Beauty Care</h4>
                                <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <h3>Follow Us</h3>
                            </div>
                        </div>
                        <div className="shop-part">
                            <div className="shop-text">
                                <h2>Instagram Shop</h2>
                            </div>
                            <div className="shop-imges">
                                <div className="images">
                                    <img src="../public/Images/IG-1.jpg" alt="shop" />                                
                                </div>
                                <div className="images">
                                    <img src="../public/Images/IG-2.jpg" alt="shop" />                                
                                </div>
                                <div className="images">
                                    <img src="../public/Images/IG-3.jpg" alt="shop" />                                
                                </div>
                                <div className="images">
                                    <img src="../public/Images/IG-4.jpg" alt="shop" />                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*------ Beautify End ------*/}
    </>
  )
}

export default Shop