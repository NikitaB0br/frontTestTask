import React from 'react';
import './modalDelete.css';

const Modal = ({onConfirm, onCancel}) => (
    <div className="modalDelete">
        <div className="modalContent">
            <p className="modalText">Вы уверены, что хотите удалить пользователя?</p>
            <div className="modalButtons">
                <button className="confirmButton" onClick={onConfirm}>Да</button>
                <button className="cancelButton" onClick={onCancel}>Нет</button>
            </div>
        </div>
    </div>
);

export default Modal;
