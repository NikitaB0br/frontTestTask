import {useState, useEffect, useMemo} from "react";

const useUsers = (users, searchQuery, activeButton, sortDirection, currentPage, usersPerPage) => {
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

    const sortedFilteredUsers = useMemo(() => {
        let sortedData = [...filteredUsers];

        if (activeButton === "date") {
            sortedData.sort((a, b) =>
                sortDirection.date === "desc"
                    ? new Date(b.registration_date) - new Date(a.registration_date)
                    : new Date(a.registration_date) - new Date(b.registration_date)
            );
        } else if (activeButton === "rating") {
            sortedData.sort((a, b) =>
                sortDirection.rating === "desc" ? b.rating - a.rating : a.rating - b.rating
            );
        }

        return sortedData;
    }, [filteredUsers, activeButton, sortDirection]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUsers = sortedFilteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(sortedFilteredUsers.length / usersPerPage);

    return {currentUsers, totalPages};
};

export default useUsers;
