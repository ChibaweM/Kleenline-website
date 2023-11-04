import React from 'react'
import ContentMenu from './ContentMenu'
import picture from "../assets/react.svg"
function Header() {
  return (
    <div className='header bg-gray-900 flex justify-between '>
        <img src={picture} alt='picture'/>
        <ContentMenu></ContentMenu>
    </div>
  )
}

export default Header
