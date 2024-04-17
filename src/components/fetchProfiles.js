/**
 * The `fetchProfiles` function retrieves and parses stored profiles from local storage, returning an
 * array of profiles or an empty array if none are found.
 * @returns An array of profiles is being returned. If there are profiles stored in the localStorage,
 * they are parsed from JSON format and returned. Otherwise, an empty array is returned.
 */
const fetchProfiles = () => {
    const result = localStorage.getItem("profiles")
    if(result != null)
        return JSON.parse(result)
    else
        return [];
}

export default fetchProfiles;