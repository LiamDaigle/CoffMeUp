import React, { useEffect, useState } from 'react';
import LandingPage from '../components/LandingPage';
import Posts from '../components/Posts';
import AuthPage from '../pages/AuthPage';

const Home = () => {
    
    const [invalidData, setInvalidData] = useState(true)

    useEffect(() => {
        const recipes = localStorage.getItem("recipes");
        const profiles = localStorage.getItem("profiles");

        if(recipes != null && profiles != null)
            setInvalidData(false)
    },[])

    console.log(invalidData)

    return (
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
            <AuthPage />
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

            </section>
            {invalidData ? <LoginModal open={invalidData} setter={setInvalidData}/> : <></>}
            
        </div>
    );
};

export default Home;
