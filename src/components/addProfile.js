import fetchProfiles from "./festProfiles"

const addProfile = (obj) => {
    //The obj parameter should be an instance of the object created using the constructRecipe method
    const profiles = fetchProfiles();

    const duplicates = profiles.filter((profile) => profile.firstName === obj.firstName && profile.lastName === obj.lastName)

    if(duplicates.length > 0)   //If trying to load a duplicate recipe title, don't add
        return
    
    profiles.push(obj)
    localStorage.setItem("profiles", JSON.stringify(profiles))
}

export default addProfile;