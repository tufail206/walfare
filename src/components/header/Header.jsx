import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/PathConstant';

const Header = () => {
    // State to handle the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the mobile menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="py-6 bg-primary-color">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <h1 className="text-2xl font-semibold ">
                    Ummat Welfare Organization
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-7">
                    <li>
                        <NavLink to={Paths.HOME} className=" hover:text-gray-300">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Paths.ABOUT} className=" hover:text-gray-300">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Paths.CONTACT} className=" hover:text-gray-300">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Paths.ACTIVITIES} className=" hover:text-gray-300">
                            Activities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Paths.GALLERY} className=" hover:text-gray-300">
                            Gallery
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="">
                        {/* Hamburger Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`mobile-ul bg-[#a88139]  flex list-none flex-col gap-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-primary-color py-4 px-6 absolute top-16 left-0 right-0 rounded-b-lg shadow-lg transition-all duration-300 z-50 ease-in-out`}
            >
             

                {/* Mobile Menu Links */}
                <li className="rounded-md transition-all duration-300 ">
                    <NavLink
                        to={Paths.HOME}
                        className="text-white hover:text-primary block py-2"
                        onClick={handleLinkClick}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="rounded-md transition-all duration-300">
                    <NavLink
                        to={Paths.ABOUT}
                        className="text-white hover:text-primary block py-2"
                        onClick={handleLinkClick}
                    >
                        About
                    </NavLink>
                </li>
                <li className="rounded-md transition-all duration-300">
                    <NavLink
                        to={Paths.CONTACT}
                        className="text-white hover:text-primary block py-2"
                        onClick={handleLinkClick}
                    >
                        Contact
                    </NavLink>
                </li>
                <li className="rounded-md transition-all duration-300">
                    <NavLink
                        to={Paths.ACTIVITIES}
                        className="text-white hover:text-primary block py-2"
                        onClick={handleLinkClick}
                    >
                        Activities
                    </NavLink>
                </li>
                <li className="rounded-md transition-all duration-300">
                    <NavLink
                        to={Paths.GALLERY}
                        className="text-white hover:text-primary block py-2"
                        onClick={handleLinkClick}
                    >
                        Gallery
                    </NavLink>
                </li>
            </div>
        </header>
    );
};

export default Header;
