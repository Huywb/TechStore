'use client'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
    const [isSideMenuOpen,setIsSideMenuOpen] = useState(false)
    const handleOpenMenu = (state: boolean)=>{
        setIsSideMenuOpen(state)
    }
    console.log(isSideMenuOpen)
  return (
    <>
        <button onClick={()=>handleOpenMenu(true)}>
            <Menu className="cursor-pointer md:hidden"/>
        </button> 
        <div className='md:hidden '>
            <SideMenu isOpen={isSideMenuOpen} onClose={handleOpenMenu}/>
        </div>
    </>
  )
}

export default MobileMenu
