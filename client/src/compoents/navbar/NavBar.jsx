import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/i Odia-logo-transparent.png"
import { useChannelStore } from '../../store/useChannelStore';
import { IoMdNotifications } from "react-icons/io";


const NavBar = () => {
    const { getChannelData } = useChannelStore();
    
        useEffect(() => {
            getChannelData();
        }, []);
    return (
        <header className="bg-white shadow sticky top-0 z-9999">
            <nav className="mx-auto max-w-7xl px-2 py-1 flex items-center justify-between">
                <Link to={"/"} className="h-10 w-32 border-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-full w-full object-cover"
                    />
                </Link>
                <div>
                    <IoMdNotifications size={22} className='text-gray-500 hover:scale-105 hover:text-gray-700 cursor-pointer' />

                </div>
            </nav>
        </header>

    )
}

export default NavBar
