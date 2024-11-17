import React from 'react';
import './userItem.css';
import cancel from '../../assets/icons/cancel.svg';

const UserItem = ({ user, onDelete }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${day}.${month}.${year}`;
    };

    return (
        <div className="userItem">
            <span className="spanUsername">{user.username}</span>
            <span>{user.email}</span>
            <span>{formatDate(user.registration_date)}</span> {/* Используем форматированную дату */}
            <span>{user.rating}</span>
            <button className="deleteButton" onClick={() => onDelete(user.id)}>
                <img src={cancel} alt="Удалить" className="deleteIcon" />
            </button>
        </div>
    );
};

export default UserItem;