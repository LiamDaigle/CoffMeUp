import React from 'react';
import LandingPage from '../components/LandingPage';
import Posts from '../components/Posts';


const Home = () => {
    return (
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
            <section id='landing' className='snap-center'>
                <LandingPage />
            </section>

            <section id='posts' className='snap-start'>
                <Posts />
            </section>
        </div>
    );
};

export default Home;
