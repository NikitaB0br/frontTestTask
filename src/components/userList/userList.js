import React from 'react';
import UserItem from '../userItem/userItem';
import './userList.css';

const UserList = ({users, onDelete}) => {
    return (
        <div className="userList">
            <div className="spanHeader">
                <span>Имя пользователя</span>
                <span>E-mail</span>
                <span>Дата регистрации</span>
                <span>Рейтинг</span>
                <span></span>
            </div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} onDelete={onDelete}/>
            ))}
        </div>
    );
};

export default UserList;