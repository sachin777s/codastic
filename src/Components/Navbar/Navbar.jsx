import React from 'react'
import "./Navbar.css"
import Logo from "../assets/logo.png"

export default function Navbar() {

    const handleResetValues = () => {
        localStorage.removeItem("codebyte-html");
        localStorage.removeItem("codebyte-css");
        localStorage.removeItem("codebyte-javascript");
        document.location.reload();
    }

    return (
        <nav>
            <div className="left-nav">
                <img className='logo' height={35} width={35} src={Logo} alt="..." />
                <span>CodeByte</span>
            </div>
            <div className='right-nav'>
                <button onClick={handleResetValues}>Reset</button>
            </div>
        </nav>
    )
}
