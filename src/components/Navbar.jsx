import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="top-0 w-full z-50 flex items-center justify-between flex-wrap p-6 bg-coffee-green text-coffee-cream">
            <div className="flex items-center flex-shrink-0 mr-6">
                <span className="font-semibold text-xl tracking-tight">CoffMeUp</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-coffee-cream hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/recipes" className="block mt-4 lg:inline-block lg:mt-0 text-coffee-cream hover:text-white mr-4">
                        Recipes
                    </Link>
                    <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-coffee-cream hover:text-white">
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
