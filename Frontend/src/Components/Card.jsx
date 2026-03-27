import React from 'react'
import { AiFillStar } from "react-icons/ai";

import { IoBag } from "react-icons/io5";


const Card = ({src,title,reviews,prevPrice,newPrice}) => {
  return (
    <div className='card'>
        <img src={src} alt="shoe" />
        <div className='card-head'>{title}</div>
        <div className='card-ico'>
            <div>
         <AiFillStar className='star' />
         <AiFillStar className='star'/>
         <AiFillStar className='star'/>
         <AiFillStar className='star'/>
         </div>
        <span className='reviews'>{reviews}</span>
        </div>
        <div className="card-price">
            <div>
            <del>{prevPrice}</del>
            <span>{newPrice}</span>
            </div>
            <IoBag className='card-bag' />
        </div>
       

    </div>
  )
}

export default Card