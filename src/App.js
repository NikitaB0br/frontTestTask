import React, { useState, useEffect, useCallback } from "react";
import UserList from "./components/userList/userList";
import Search from "./components/searchPanel/search";
import Sort from "./components/sortPanel/sort";
import Pagination from "./components/pagination/pagination";
import Modal from "./components/modalDelete/modalDelete";
import useFilteredUsers from "./hooks/useFilteredUsers";
import useSortedUsers from "./hooks/useSortedUsers";
import usePagination from "./hooks/usePagination";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [sortDirection, setSortDirection] = useState({ date: null, rating: null });
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users");
                if (!response.ok) throw new Error("Ошибка при загрузке данных");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message || "Неизвестная ошибка");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = useCallback((id) => {
        setUserToDelete(id);
        setIsModalOpen(true);
    }, []);

    const confirmDelete = useCallback(() => {
        setUsers((prevUsers) => {
            const updatedUsers = prevUsers.filter((user) => user.id !== userToDelete);
            const totalPages = Math.ceil(updatedUsers.length / usersPerPage);
            if (currentPage > totalPages) {
                setCurrentPage(totalPages);
            }

            return updatedUsers;
        });

        setIsModalOpen(false);
    }, [userToDelete, currentPage, usersPerPage]);

    const cancelDelete = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        setSortDirection((prev) => ({
            ...prev,
            [buttonType]: prev[buttonType] === "asc" ? "desc" : "asc",
        }));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    const handleClearFilter = () => {
        setSearchQuery("");
        setActiveButton(null);
        setSortDirection({ date: null, rating: null });
    };

    const isFilterActive = searchQuery || activeButton;
    const filteredUsers = useFilteredUsers(users, searchQuery, activeButton);
    const sortedFilteredUsers = useSortedUsers(filteredUsers, activeButton, sortDirection);
    const { currentUsers, totalPages } = usePagination(sortedFilteredUsers, currentPage, usersPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, filteredUsers]);

    return (
        <div className="app">
            <header className="header">
                <h1 className="title">Список пользователей</h1>
            </header>
            <Search
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                isFilterActive={isFilterActive}
                onClearFilter={handleClearFilter}
            />
            <Sort activeButton={activeButton} onSortClick={handleButtonClick} />
            {isLoading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p className="errorMessage">{error}</p>
            ) : (
                <UserList users={currentUsers} onDelete={handleDelete} />
            )}
            {isModalOpen && <Modal onConfirm={confirmDelete} onCancel={cancelDelete} />}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
}

export default App;