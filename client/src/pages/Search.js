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
        API.findBooks(query).then(response => this.setState({ results: response.data }));
    }

    handleInput = event => {
        let value = event.target.value;
        console.log(value);
        this.setState({ search: value });
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <SearchBar change={this.handleInput}/>
            </div>
        )
    }
}

export default Search;