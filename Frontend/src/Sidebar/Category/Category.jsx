import React from 'react'
import SidebarComp from '../../Components/SidebarComp'
const Category = ({onCategoryChange}) => {
  return (
    <SidebarComp category='category'
    options={['all','sneakers','flats','sandals','heels']}
    changes={onCategoryChange}/>
  )
}

export default Category