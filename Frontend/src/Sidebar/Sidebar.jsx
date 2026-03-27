import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import { TiShoppingCart } from "react-icons/ti";
import './sidebar.css'


const Sidebar = ({onCategoryChange,onPriceChange,onColorChange}) => {
  return (
    <section className='sidebar'>
      <div style={{display:"flex",justifyContent:"center"}}>
      <TiShoppingCart className='sidebar-ico'/>
      </div>
        <Category onCategoryChange={onCategoryChange}/>
        <Price onPriceChange={onPriceChange}/>
        <Colors onColorChange={onColorChange}/>
    </section>
  )
}

export default Sidebar