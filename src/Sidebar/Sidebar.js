import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import { FiShoppingCart } from "react-icons/fi";
import './Sidebar.css'

function Sidebar() {
  return <>
    <section className='sidebar'>
        <div className="logo-container">
            <h1>MY LOGO</h1>
        </div>

        <Category />
        <Price />
        <Colors />
    </section>
  </>
}

export default Sidebar