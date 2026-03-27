import React, { useState } from 'react'

import SidebarComp from '../../Components/SidebarComp'

const Colors = ({onColorChange}) => {
  return (
    <SidebarComp category='colors'
    options={['all','black','blue','red','green','white']}
    changes={onColorChange}/>
  )
}

export default Colors