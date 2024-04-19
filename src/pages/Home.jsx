import React, { useEffect, useState } from 'react';
import LandingPage from '../components/LandingPage';
import Posts from '../components/Posts';
import AuthPage from '../pages/AuthPage';
import addProfile from '../components/addProfile';
import addRecipe from '../components/addRecipe';
import constructProfile from '../components/constructProfile';
import constructRecipe from '../components/constructRecipe';

const Home = () => {
    const [invalidData, setInvalidData] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const recipes = localStorage.getItem("recipes");
        const profiles = localStorage.getItem("profiles");

        if (recipes != null && profiles != null) {
            setInvalidData(false);
        }

        // Check if the user is already logged in
        const userLoggedIn = localStorage.getItem("loggedIn");
        if (userLoggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("loggedIn", "true");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("loggedIn");
    };

    /* The `return` statement in the `Home` component is returning JSX code that represents the
    structure of the component's UI. Here's a breakdown of what the JSX code is doing: */
    return (
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
            {!isLoggedIn && (
                <AuthPage onLogin={handleLogin} />
            )}

            {isLoggedIn && (
                <>
                    <section id='landing' className='snap-center'>
                        <LandingPage />
                    </section>

                    <section id='posts' className='snap-start'>
                        <Posts />
                    </section>
                </>
            )}
        </div>
    );
};

export default Home;

