import React from 'react'
import SidebarComp from '../../Components/SidebarComp'
const Price = ({onPriceChange}) => {
  return (
    <SidebarComp category='price'
    options={['all','0-50','50-100','100-150','Over-150']}
    changes={onPriceChange}/>
  )
}

export default Price