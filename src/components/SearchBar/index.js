import React from 'react';
import './index.css';
export default function SearchBar({ setSearchImage }) {

    const onSearchQuerySubmit = (e) => {
        e.preventDefault();
        setSearchImage(e.target.elements.ImageSearch.value);
        e.target.elements.ImageSearch.value = '';
    }

    return (
        <form onSubmit={onSearchQuerySubmit}>
            <input className="search-bar" type="text" name="ImageSearch" placeholder="Search free high resolution photos"></input>
        </form>
    )
}
