import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { BsBagHeart } from "react-icons/bs";
import './Products.css'
function products() {
  return (
    <section className='card-container'>
      <section className='card'>
        <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt='Shoes'/>
        <div className='card-details'>
          <h3 className='card-title'>Shoes</h3>
          <section className='card-reviews'>
            <FaRegStar className='rating-star' />
            <FaRegStar className='rating-star' />
            <FaRegStar className='rating-star' />
            <FaRegStar className='rating-star' />
            <span className='total-reviews'>4</span>
          </section>

          <section className='card-price'> 
            <div className='price'> 
              <del>Rp 30.000</del> Rp 10.000
            </div>

            <div className="bag-icon">
            <BsBagHeart />
            </div>
          </section>
        </div>
      </section>
      <section className='card'>
        <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt='Shoes'/>
        <div className='card-details'>
          <h3 className='card-title'>Shoes</h3>
          <section className='card-reviews'>
            <FaRegStar className='rating-star' />
            <FaRegStar className='rating-star' />
            <FaRegStar className='rating-star' />
            <FaRegStar className='rating-star' />
            <span className='total-reviews'>4</span>
          </section>

          <section className='card-price'> 
            <div className='price'> 
              <del>Rp 30.000</del> Rp 10.000
            </div>

            <div className="bag-icon">
            <BsBagHeart />
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}

export default products