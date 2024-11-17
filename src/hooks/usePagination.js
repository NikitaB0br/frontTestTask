const usePagination = (sortedFilteredUsers, currentPage, usersPerPage) => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUsers = sortedFilteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(sortedFilteredUsers.length / usersPerPage);

    return { currentUsers, totalPages };
};

export default usePagination;
