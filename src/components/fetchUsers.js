/**
 * The `fetchUsers` function retrieves user data from the local storage and returns it as an array
 * after parsing it from JSON format.
 * @returns The `fetchUsers` function returns an array of users that are stored in the localStorage. If
 * there are no users stored in the localStorage, it returns an empty array.
 */
const fetchUsers = () => {
    const result = localStorage.getItem("users");
    return result ? JSON.parse(result) : [];
};

export default fetchUsers;