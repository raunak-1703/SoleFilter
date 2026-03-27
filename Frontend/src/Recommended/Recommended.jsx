import React, { useState } from 'react'
import './Recommended.css'
const Recommended = ({onRecommendedChange}) => {
  const [clickedindex,setClickedindex]= useState(null)
  const clickHandler=(index,brand)=>{
    setClickedindex(index);
    onRecommendedChange(brand)
  }
  const brands = ['All Products', 'Nike', 'Adidas', 'Puma', 'Vans'];
  return (
    <div className='rec'>
        <div id='rec-head'>Recommended</div>
        <div className="btn-container">
          {brands.map((brand,index)=>(
            <button className={clickedindex===index?'btn-clicked':'btn'} key={index} onClick={()=>clickHandler(index,brand)}>{brand}</button>
          ))}
        </div>
    </div>
  )
}

export default Recommended