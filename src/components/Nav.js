import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import close from "../assets/icon-close.svg"
import "../styles/Nav.css"
import  menubar from "../assets/icon-hamburger.svg"
const Nav = () => {
    const [menu, setMenu] = useState(false)
    
  return (
    <>
    
     <div className='nav'>
        <img src={Logo} alt="logo" className='logo'/>
        <div className='linkcont'>
            <div className={menu? "open": "links"}> 
                <ul className={menu? "openlist": "ulist"} >
                    <li>PRODUCT</li>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                </ul>
                <p className='line'></p>
                <h4 className="login">LOGIN</h4>
            </div>
            <button onClick={()=> setMenu(!menu)} className='menubt'> {menu?
               <img src={close} className='menu'/>: <img src={menubar} className='menu'/>}
            </button>
        </div>
     </div>
    </>
  )
}

export default Nav