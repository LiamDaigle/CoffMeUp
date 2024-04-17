import fetchUsers from "./fetchUsers";

const addUser = (userObject) => {
    const users = fetchUsers();

    // Check for duplicate email to prevent multiple registrations with the same email
    const duplicate = users.find(user => user.email === userObject.email);
    if (duplicate) {
        console.warn("User with this email already exists.");
        return false; // Return false to indicate failure to add user
    }

    users.push(userObject);
    localStorage.setItem("users", JSON.stringify(users));
    return true; // Return true to indicate successful addition
};

export default addUser;