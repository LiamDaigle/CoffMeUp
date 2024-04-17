import fetchProfiles from "./fetchProfiles";

const updateCurrentProfile = (fName, newRecipe) => {
    const profiles = fetchProfiles();

    // Goal: add Recipe to tried of profiles collection in localstorage
    // find profile in profiles collection in localstorage
    const currentUser = queryForFirstName(fName, profiles)
    
    // add Recipe to tried of current user 
    currentUser.tried.push(newRecipe)

    // Add that updated current user to profiles collection in localstorage
    for(let i=0; i<profiles.length; i++){
        if(profiles[i].fName === firstName){
            profiles[i] = currentUser;
        }
    }

    localStorage.setItem("profiles", JSON.stringify(profiles))
}

export default updateCurrentProfile;