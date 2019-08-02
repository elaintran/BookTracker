import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import SearchBar from "../components/SearchBar/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import FlexContainer from "../components/FlexContainer/index.js";
import Tag from "../components/Tag/index.js";
import Wrapper from "../components/Wrapper/index.js";
import Results from "../components/Results/index.js";
import API from "../utils/API.js";

class Search extends Component {
    state = {
        query: "",
        tags: ["Light Novel", "Literature", "Romance", "Sci-Fi", "Fiction"],
        results: [],
        search: false
    }

    searchBooks = query => {
        API.findBooks(query).then(response => this.setState({
            results: response.data.items,
            search: true
        }));
    }

    handleInput = event => {
        let value = event.target.value;
        this.setState({ query: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.query);
    }

    saveBook = data => {
        API.saveBook(data).then(response => console.log(response));
        // console.log(data);
    }

    renderSectionTitle() {
        if (this.state.results !== undefined && this.state.search) {
            return <SectionTitle>Displaying {this.state.results.length} Results</SectionTitle>;
        } else if (this.state.results === undefined && this.state.search) {
            return <SectionTitle>No Results Found</SectionTitle>;
        } else {
            return false;
        }
    }

    renderResults() {
        if (this.state.results !== undefined) {
            return this.state.results.map(results =>
                <Results
                    bookData={{
                        title: results.volumeInfo.title,
                        author: results.volumeInfo.authors.toString().replace(/,/g, ", "),
                        description: results.volumeInfo.description,
                        image: results.volumeInfo.imageLinks.thumbnail,
                        link: results.volumeInfo.canonicalVolumeLink,
                        date: results.volumeInfo.publishedDate
                    }}
                    save={this.saveBook}
                />
            )
        } else {
            return false;
        }
    }

    render() {
        return (
            <div style={{width: "100%"}}>
                <Jumbotron>
                    <h1 className="title">Search for the <span className="emphasis">Perfect</span> Book</h1>
                    <h4 className="subtitle">Explore the Google Books database for a new read.</h4>
                </Jumbotron>
                <SearchBar change={this.handleInput} submit={this.handleSubmit}/>
                <FlexContainer>
                    {this.state.tags.map(tags => <Tag name={tags} click={this.searchBooks} />)}
                </FlexContainer>
                <Wrapper>
                    {this.renderSectionTitle()}
                    {this.renderResults()}
                </Wrapper>
            </div>
        )
    }
}

export default Search;