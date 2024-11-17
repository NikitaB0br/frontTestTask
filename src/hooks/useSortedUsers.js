import { useMemo } from "react";

const useSortedUsers = (filteredUsers, activeButton, sortDirection) => {
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

    return sortedFilteredUsers;
};

export default useSortedUsers;
