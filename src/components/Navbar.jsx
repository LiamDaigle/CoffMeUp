import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiCoffeeCup } from "react-icons/ci";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

/**
 * The Navbar component in JavaScript React manages navigation links with active styling based on the
 * current location.
 * @returns The Navbar component is being returned. It is a functional component that renders a
 * navigation bar with links to Home, Recipes, and Profile pages. The active link is highlighted based
 * on the current location using the activeLink state variable. The component uses React Router's Link
 * component to navigate between different pages and update the active link state accordingly.
 */
const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    return (
        <nav className="fixed top-0 w-full z-50 flex items-center justify-between flex-wrap bg-coffee-dark text-coffee-cream">
            <div className="w-full flex-grow justify-around flex lg:items-center lg:w-auto satisfy-regular text-2xl">
                <Link to="/" className={`block w-full text-center mt-4 lg:inline-block lg:mt-0 hover:text-white p-3 mr-4 border-b-2 ${activeLink === '/' ? 'border-white text-white' : 'border-coffee-dark text-coffee-cream'}`} onClick={() => setActiveLink('/')}>
                    <div className="flex justify-center gap-2">
                        <div className="text-3xl">
                            <BiSolidCoffeeBean />
                        </div>
                        Home
                    </div>
                </Link>
                <Link to="/recipes" className={`block w-full text-center mt-4 lg:inline-block lg:mt-0 hover:text-white p-3 mr-4 border-b-2 ${activeLink === '/recipes' ? ' border-white text-white' : 'border-coffee-dark text-coffee-cream'}`} onClick={() => setActiveLink('/recipes')}>
                    <div className="flex justify-center gap-2">
                        <div className="text-3xl">
                            <CiCoffeeCup />
                        </div>
                        Recipes
                    </div>
                </Link>
                <Link to="/profile" className={`block w-full text-center mt-4 lg:inline-block lg:mt-0 p-3 hover:text-white border-b-2 ${activeLink === '/profile' ? ' border-white text-white' : 'border-coffee-dark text-coffee-cream'}`} onClick={() => setActiveLink('/profile')}>
                    <div className="flex justify-center gap-2">
                        <div className="text-3xl">
                            <MdAccountCircle />
                        </div>
                        Profile
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
