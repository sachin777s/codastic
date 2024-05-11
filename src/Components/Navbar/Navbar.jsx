import React, { useContext } from 'react'
import "./Navbar.css"
import Logo from "../assets/logo.png"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { IoSunny } from "react-icons/io5";
import ThemeContext from "../../context/ThemeContext/ThemeContext"

export default function Navbar() {

    const { isDark, setIsDark } = useContext(ThemeContext);

    /****  Handling reset ralues (Deleting from local storage) ***/
    const handleResetValues = () => {
        localStorage.removeItem("codebyte-html");
        localStorage.removeItem("codebyte-css");
        localStorage.removeItem("codebyte-javascript");
        document.location.reload();
    }

    return (
        <nav style={!isDark ? { backgroundColor: "#fff" } : null}>
            <div className="left-nav">
                <img className='logo' height={35} width={35} src={Logo} alt="..." />
                <span style={!isDark ? { color: "#000" } : null}>Codastic</span>
            </div>
            <div className='right-nav'>
                <button onClick={() => setIsDark(!isDark)}>
                    {
                        isDark ? <IoSunny /> : <BsFillMoonStarsFill />

                    }
                </button>
                <button onClick={handleResetValues}>Reset</button>
            </div>
        </nav>
    )
}
