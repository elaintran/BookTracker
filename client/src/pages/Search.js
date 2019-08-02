import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import SearchBar from "../components/SearchBar/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import FlexContainer from "../components/FlexContainer/index.js";
import Tag from "../components/Tag/index.js";
import Wrapper from "../components/Wrapper/index.js";
import Card from "../components/Card/index.js";
import Results from "../components/Results/index.js";
import Dropdown from "../components/Dropdown/index.js";
import API from "../utils/API.js";

class Search extends Component {
    state = {
        query: "",
        tags: ["Light Novel", "Literature", "Romance", "Sci-Fi", "Fiction"],
        results: [],
        search: false
    }

    searchBooks = query => {
        API.findBooks(query).then(response => {
            const results = [];
            for (let i = 0; i < response.data.items.length; i++) {
                let resultObj = {};
                resultObj.title = response.data.items[i].volumeInfo.title;
                resultObj.author = response.data.items[i].volumeInfo.authors.toString().replace(/,/g, ", ");
                resultObj.description = response.data.items[i].volumeInfo.description;
                resultObj.image = response.data.items[i].volumeInfo.imageLinks.thumbnail;
                resultObj.link = response.data.items[i].volumeInfo.canonicalVolumeLink;
                resultObj.date = response.data.items[i].volumeInfo.publishedDate;
                results.push(resultObj);
            }
            this.setState({
                results: results,
                search: true
            })
        });
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
                <Card>
                    <Dropdown>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={() => this.saveBook(results)}>Add to Reading</div>
                            <div className="dropdown-item">Add to Plan to Read</div>
                            <div className="dropdown-item">Add to Completed</div>
                        </div>
                    </Dropdown>
                    <Results bookData={results} />
                </Card>
            )
        } else {
            return false;
        }
    }

    render() {
        return (
            <div>
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