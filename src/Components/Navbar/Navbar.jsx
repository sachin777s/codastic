import React from 'react'
import "./Navbar.css"
import Logo from "../assets/logo.png"

export default function Navbar() {

    

    return (
        <nav>
            <div className="left-nav">
              <img className='logo' height={35} width={35} src={Logo} alt="..." />
              <span>CodeByte</span>
            </div>
            <div className='right-nav'>
              
            </div>
        </nav>
    )
}
