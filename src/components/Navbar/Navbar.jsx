import React from 'react'
import "./Navbar.css"
import logo from "../../../public/customWhiteLogo.jpg"

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className='logoDiv'>
                <img src={logo} alt="" width={"50px"} height={"50px"} />
                <p>Speedy</p>
            </div>

            <div className='menuItem'>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}

export default Navbar