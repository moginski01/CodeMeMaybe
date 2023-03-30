import React, {useState} from 'react';
import {RiMenu3Fill, RiCloseLine, RiMenu3Line} from "react-icons/ri";
import logo from'../../assets/logo.png'
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#aboutus">About us</a></p>
        <p><a href="#contact">Contact</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToogleMenu] = useState(false);

    return(
        <div className="codememaybe__navbar">
            <div className="codememaybe__navbar-links">
                <div className="codememaybe__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="codememaybe__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="codememaybe__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="codememaybe__navbar-menu">
                {toggleMenu
                    ?<RiCloseLine color="#fff" size={27} onClick={() => setToogleMenu(false)} />
                    :<RiMenu3Line color="#fff" size={27} onClick={() => setToogleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="codememaybe__navbar-menu-container scale-up-center">
                        <div className="codememaybe__navbar-menu_container-links">
                            <Menu/>
                            <div className="codememaybe__navbar-menu_container-links-signs">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;