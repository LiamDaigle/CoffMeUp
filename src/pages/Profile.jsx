import fetchProfiles from '../components/fetchProfiles';
import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import queryForFirstName from "../components/queryForFirstName";
import { TextField, Typography } from "@mui/material";


const Profile = () => {
    const query = "Johna"
    const [profiles, setProfiles] = useState([])
    const [queriedProfile, setQueriedProfile] = useState([])

    useEffect(() => {
        const allProfiles = fetchProfiles()
        setProfiles(allProfiles)
        setQueriedProfile(allProfiles)

        const result = queryForFirstName(query, profiles)
        setQueriedProfile(result)
    },[])

    return (
        <div className="grid grid-cols-2 gap-x-36 gap-y-24 mt-10">
            <h1>Profiles</h1>
            {queriedProfile.map((profile, index) => <div key={index}><ProfileCard fName={profile.firstName} lName={profile.lastName} favorites={profile.favorites} tried={profile.tried} image={"/profilePic.jpg"} /></div>)}
        </div>
    );
};

export default Profile;
