import React from "react";
import "./style.css";

function SearchBar() {
    return (
        <div>
            <form className="search-form">
                <input type="text" className="search-bar" placeholder="Search by Title, Author, ISBN..." />
                <button type="submit" className="search-button"><i className="fas fa-search"></i></button>
            </form>
        </div>
    );
}

export default SearchBar;