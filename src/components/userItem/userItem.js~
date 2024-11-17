import React from 'react';
import './userItem.css';
import cancel from '../../assets/icons/cancel.svg'

const UserItem = ({user, onDelete}) => {
    return (
        <div className="userItem">
            <span className="spanUsername">{user.username}</span>
            <span>{user.email}</span>
            <span>{user['registration_date']}</span>
            <span>{user.rating}</span>
            <button className="deleteButton" onClick={() => onDelete(user.id)}>
                <img src={cancel} alt="Удалить" className="deleteIcon"/>
            </button>
        </div>
    );
};

export default UserItem;