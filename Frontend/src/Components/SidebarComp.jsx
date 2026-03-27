import React from 'react'
import Input from './Input'

const SidebarComp = ({category,options,changes}) => {
  return (
  <div className='categories'>
    <div className='heading'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
    </div>
    {options.map((option,index)=>(
    <Input category={category} option={option} key={index} setChange={changes}/>
    ))}
  </div>
  )
}

export default SidebarComp