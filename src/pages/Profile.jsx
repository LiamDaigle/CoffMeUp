import React, { useEffect, useState } from "react";
import fetchProfiles from '../components/fetchProfiles';
import ProfileCard from "../components/ProfileCard";
import queryForFirstName from "../components/queryForFirstName";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const Profile = () => {
    const [profiles, setProfiles] = useState([])
    const [queriedProfile, setQueriedProfile] = useState([])

    useEffect(() => {
        const allProfiles = fetchProfiles()
        const user = JSON.parse(localStorage.getItem("users"))
        const query = user[0].firstName

        console.log(query)

        // setProfiles(allProfiles)
        
        const result = queryForFirstName(query, allProfiles)
        setQueriedProfile(result)
    },[])

/* This part of the code is the `return` statement within the `Profile` functional component. It is
responsible for rendering the JSX (JavaScript XML) elements that will be displayed on the screen
when the `Profile` component is rendered. */
    return (
        <div className="mt-10 w-full px-[2vw] py-[4vw] pb-[10vh] bg-coffee-lightgreen min-h-screen">
            <Link to="/" className="flex items-center text-coffee-dark hover:text-coffee-green">
                <FaArrowLeft size={20} className="inline mr-2"/>
                <Typography variant="h6">Back to Home</Typography>
            </Link>
            <div className="mt-10 px-[5vw] bg-coffee-cream">
                {queriedProfile.map((profile, index) => (
                    <div key={index}>
                        <ProfileCard 
                            fName={profile.firstName} 
                            lName={profile.lastName} 
                            favorites={profile.favorites} 
                            tried={profile.tried} 
                            image={"/profilePic.jpg"} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
