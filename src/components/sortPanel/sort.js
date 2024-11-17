import React from 'react';
import './sort.css';

const Sort = ({activeButton, onSortClick}) => (
    <div className="sortContainer">
        <p>Сортировка:</p>
        <button
            className={`sortButton ${activeButton === 'date' ? 'active' : ''}`}
            onClick={() => onSortClick('date')}>
            Дата регистрации
        </button>
        <button
            className={`sortButton ${activeButton === 'rating' ? 'active' : ''}`}
            onClick={() => onSortClick('rating')}>
            Рейтинг
        </button>
    </div>
);

export default Sort;
