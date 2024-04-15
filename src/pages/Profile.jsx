import fetchProfiles from '../components/fetchProfiles';
import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import queryForFirstName from "../components/queryForFirstName";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const Profile = () => {
    const query = "Johna"
    const [profiles, setProfiles] = useState([])
    const [queriedProfile, setQueriedProfile] = useState([])

    useEffect(() => {
        const allProfiles = fetchProfiles()
        setProfiles(allProfiles)
    },[])

    useEffect(() => {
        if(profiles.length > 0){
            const result = queryForFirstName(query, profiles)
            setQueriedProfile(result)
        }
    },[profiles])

    return (
        <div className="mt-10 w-full px-[2vw] pb-[10vh] bg-coffee-lightgreen min-h-screen">
            <Link to="/" className="flex items-center text-coffee-medium hover:text-coffee-green">
                <FaArrowLeft size={20} className="inline mr-2"/>
                <Typography variant="h6">Back to Home</Typography>
            </Link>
            <div className="mt-10 px-[3vw] bg-coffee-cream">
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
