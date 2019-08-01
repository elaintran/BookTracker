import axios from "axios";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import SearchBar from "../components/SearchBar/index.js";
import API from "../utils/API.js";

class Search extends Component {
    state = {
        search: "",
        results: []
    }

    searchBooks = query => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query).then(response => console.log(response.data));
    }

    handleInput = event => {
        let value = event.target.value;
        this.setState({ search: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <SearchBar change={this.handleInput} submit={this.handleSubmit}/>
            </div>
        )
    }
}

export default Search;