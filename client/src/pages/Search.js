import axios from "axios";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import SearchBar from "../components/SearchBar/index.js";
import Results from "../components/Results/index.js";
// import API from "../utils/API.js";

class Search extends Component {
    state = {
        search: "",
        results: []
    }

    searchBooks = query => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
            .then(response => {
                this.setState({results: response.data.items});
                // title
                // console.log(this.state.results);
                // console.log(this.state.results[0].volumeInfo.averageRating);
                //console.log(this.state.results[0].volumeInfo.canonicalVolumeLink)
                //console.log(this.state.results[0].volumeInfo.description)
                //console.log(this.state.results[0].volumeInfo.publishedDate)
                //console.log(this.state.results[0].volumeInfo.imageLinks.thumbnail)
            });
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
                {/* <div className="wrapper"> */}
                    {this.state.results.map(results =>
                        <Results
                            title={results.volumeInfo.title}
                            author={results.volumeInfo.authors.toString().replace(/,/g, ", ")}
                            description={results.volumeInfo.description}
                            rating={results.volumeInfo.averageRating}
                            link={results.volumeInfo.canonicalVolumeLink}
                            date={results.volumeInfo.publishedDate}
                            image={results.volumeInfo.imageLinks.thumbnail}
                        />
                    )}
                {/* </div> */}
            </div>
        )
    }
}

export default Search;