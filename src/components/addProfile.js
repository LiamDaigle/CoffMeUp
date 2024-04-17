import fetchProfiles from "./fetchProfiles";

/**
 * The `addProfile` function adds a new profile object to a list of profiles stored in local storage,
 * checking for duplicates based on first and last name.
 * @param obj - The `obj` parameter is an object that should be an instance of the object created using
 * the `constructRecipe` method.
 * @returns If a duplicate recipe title is being loaded, nothing will be added and the function will
 * return without making any changes.
 */
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