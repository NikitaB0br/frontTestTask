import React from 'react';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="pagination">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1 || totalPages === 0}>
            Предыдущая
        </button>
        {[...Array(totalPages)].map((_, index) => (
            <button
                key={index + 1}
                onClick={() => onPageChange(index + 1)}
                className={index + 1 === currentPage ? "active" : ""}>
                {index + 1}
            </button>
        ))}
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}>
            Следующая
        </button>
    </div>
);

export default Pagination;