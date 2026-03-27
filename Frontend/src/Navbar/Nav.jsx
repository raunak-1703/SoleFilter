import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { LuUserRoundPlus } from "react-icons/lu";
import './nav.css'

const Nav = ({onSearchChange}) => {
  const changeHandler=(e)=>{
    onSearchChange(e.target.value)

  }
  return (
    <nav className='flex'>
        <div className="nav-input">
            <input type="text" placeholder='Enter your search shoes'
            onChange={(e)=>changeHandler(e)}/>
        </div>
        <div className="cart">
            <CiHeart />
            <BsCart2 />
            <LuUserRoundPlus />
        </div>
    </nav>
  )
}

export default Nav