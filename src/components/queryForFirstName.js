const filterMethod = (profile, query) => {
    const firstName = profile.firstName.toLowerCase()
    const filterQuery = query.toLowerCase()
    console.log("FirstName: ", firstName, " Query: ", filterQuery)

    return firstName.includes(filterQuery)

}
const queryForFirstName = (query, profileList) => {
    const result = profileList.filter((profile) => filterMethod(profile, query))
    console.log(result)
    return result
}

export default queryForFirstName;