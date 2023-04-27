import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

// nie działa
function HomeAfterLogin(){
    const navigate = useNavigate();
    const { user } = useAuthContext()

    if(user){
        navigate("/Offerts")
    }
    
}   

const Menu = ({ onClose }) => {
    const { user } = useAuthContext()

    return (
        <>
            {!user && (
                <>
                    <p className="text-white capitalize mx-8 sm:my-2 xs:my-2" onClick={onClose}><Link to="/">Home</Link></p>
                    <p className="text-white capitalize mx-8 sm:my-2 xs:my-2" onClick={onClose}><Link to="/aboutus">About us</Link></p>
                    <p className="text-white capitalize mx-8 sm:my-2 xs:my-2" onClick={onClose}><Link to="/contact">Contact</Link></p>
                </>
            )}
            {user && (
                <p className="text-white capitalize mx-8 sm:my-2 xs:my-2" onClick={onClose}><Link to="/offerts">Offerts</Link></p>
            )}
        </>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleMenuClose = () => {
        setToggleMenu(false);
    }

    const handleClick = () => {
        logout()
    }

    return (
        <div className="flex justify-between items-center px-6 py-2">
            <div className="flex justify-start items-center">
                <div className="mr-6">
                    <img src={logo} alt="logo" className="h-8" />
                </div>
                <div className="hidden lg:flex">
                    <Menu onClose={handleMenuClose} />
                </div>
            </div>
            {user && (
            <div className=''>
                <span className='font-bold mr-4 text-white '>{user.email}</span>
                <button className='px-4 py-2 text-white font-medium bg-purple-600 rounded-full sm:rounded-lg' onClick={handleClick}>Log out</button>
            </div>
            )}
            {!user && (
                <div className="flex justify-end items-center">
                <p className="mr-4 text-white capitalize">
                    <Link to="/login">Login in</Link>
                </p>
                <button type="button" onClick={HomeAfterLogin} className="px-4 py-2 text-white font-medium bg-purple-600 rounded-full sm:rounded-lg">
                    <Link to="/signup">Sign Up</Link>
                </button>
                <div className="ml-4 lg:hidden">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                </div>
                </div>
            )}

            {toggleMenu && (
                <div className="flex flex-col justify-end items-end text-right bg-gray-800 py-4 px-2 absolute top-14 right-0 rounded-md shadow-md transition-all duration-300">
                    <Menu onClose={handleMenuClose} />
                </div>
            )}
        </div>
    );
}

export default Navbar;