import React from 'react';

export default function SearchBar({ setSearchImage }) {

    const onSearchQuerySubmit = (e) => {
        e.preventDefault();
        setSearchImage(e.target.elements.ImageSearch.value);
        e.target.elements.ImageSearch.value = '';
    }

    return (
        <div>
            <form onSubmit={onSearchQuerySubmit}>
                <input type="text" name="ImageSearch"></input>
            </form>
        </div>
    )
}
