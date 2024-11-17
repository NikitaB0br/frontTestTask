import React from 'react';
import './search.css';
import searchIcon from '../../assets/icons/source_icons_search 1.svg';
import cleanIcon from '../../assets/icons/clean.svg';

const Search = ({searchQuery, onSearchChange, isFilterActive, onClearFilter}) => (
    <div className="searchContainer">
        <div className="searchPanel">
            <div className="inputWrapper">
                <img src={searchIcon} alt="Поиск" className="searchIcon"/>
                <input
                    type="text"
                    placeholder="Поиск по имени или e-mail"
                    className="searchInput"
                    value={searchQuery}
                    onChange={onSearchChange}
                />
            </div>
        </div>
        {isFilterActive && (
            <button className="clearButton" onClick={onClearFilter}>
                <img src={cleanIcon} alt="Очистить фильтр" className="clearButtonIcon"/>
                Очистить фильтр
            </button>
        )}
    </div>
);

export default Search;
