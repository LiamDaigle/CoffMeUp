const constructUser = (firstName, lastName, email, password) => {
    return {
        firstName,
        lastName,
        email,
        password
    };
};

export default constructUser;