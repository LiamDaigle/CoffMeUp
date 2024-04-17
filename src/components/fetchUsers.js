const fetchUsers = () => {
    const result = localStorage.getItem("users");
    return result ? JSON.parse(result) : [];
};

export default fetchUsers;