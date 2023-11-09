import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex column mt-5' style={{ width:'100%',height:'450px'}}>
      <div className='d-flex justify-content-evenly  w-100'>
        <div className='e-cart' style={{width:'400px'}}>
          <h3>
          <i class="fa-solid fa-cart-shopping"></i>
          E-COMMERCE</h3>
          <p>
          e-commerce, in full electronic commerce, maintaining relationships and conducting business transactions that include selling information, services, and goods by means of computer telecommunications networks          </p>
          </div>
          <div className='links d-flex flex-column'>
            <h3>LINKS</h3>
           <Link to={'/'} style={{textDecoration:'none'}}>HOME</Link>
           <Link to={'/cart'} style={{textDecoration:'none'}}>CART</Link>
           <Link to={'/whishlist'} style={{textDecoration:'none'}}>WHISHLIST</Link>

          </div>
          <div className='shop d-flex flex-column'>
            <h3>Electronics</h3>
            <p>Groccery</p>
            <p>Dress Wear</p>
            <p>Ornaments</p>
          </div>
          <div className='contact'>
              <h3>CONTACT US</h3>
              <div className='d-flex mt-3'>
                <input type="text"  className='form-control' placeholder='Enter your emailid'/>
                <button className='btn btn-info ms-2'><i className='fa-solid fa-arrow-right' ></i></button>

              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
