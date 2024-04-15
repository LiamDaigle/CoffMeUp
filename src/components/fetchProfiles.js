const fetchProfiles = () => {
    const result = localStorage.getItem("profiles")
    if(result != null)
        return JSON.parse(result)
    else
        return [];
}

export default fetchProfiles;