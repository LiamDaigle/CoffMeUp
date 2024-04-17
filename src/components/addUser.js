import fetchUsers from "./fetchUsers";

/**
 * The `addUser` function checks for duplicate emails in existing users before adding a new user to the
 * list and returns true for successful addition or false if the email already exists.
 * @param userObject - The `userObject` parameter in the `addUser` function is an object that
 * represents a user with properties like `email`, `name`, `username`, etc. It contains the information
 * of the user that needs to be added to the list of users.
 * @returns The `addUser` function returns a boolean value - `true` if the user was successfully added,
 * and `false` if a user with the same email already exists and was not added.
 */
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