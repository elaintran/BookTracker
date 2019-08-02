import axios from "axios";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import SearchBar from "../components/SearchBar/index.js";
import FlexContainer from "../components/FlexContainer/index.js";
import Tag from "../components/Tag/index.js";
import Wrapper from "../components/Wrapper/index.js";
import Results from "../components/Results/index.js";
// import API from "../utils/API.js";

class Search extends Component {
    state = {
        search: "",
        tags: ["Light Novel", "Literature", "Romance", "Sci-Fi", "Fiction"],
        results: []
    }

    searchBooks = query => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
            .then(response => {
                this.setState({results: response.data.items});
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
                <Wrapper>
                    <FlexContainer>
                        {this.state.tags.map(tags => <Tag name={tags} click={this.searchBooks} />)}
                    </FlexContainer>
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
                </Wrapper>
            </div>
        )
    }
}

export default Search;