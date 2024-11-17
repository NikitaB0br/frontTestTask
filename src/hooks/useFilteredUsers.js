import { useState, useEffect } from "react";

const useFilteredUsers = (users, searchQuery, activeButton) => {
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        if (!searchQuery && !activeButton) {
            setFilteredUsers(users);
            return;
        }

        const filtered = users.filter(user =>
            user.username.toLowerCase().includes(searchQuery) || user.email.toLowerCase().includes(searchQuery)
        );

        setFilteredUsers(filtered);
    }, [users, searchQuery, activeButton]);

    return filteredUsers;
};

export default useFilteredUsers;
