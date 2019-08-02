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

    //search the google books api
    searchBooks = query => {
        API.findBooks(query).then(response => {
            const results = [];
            //only push in information utilized in this applicaiton
            for (let i = 0; i < response.data.items.length; i++) {
                let resultObj = {};
                resultObj.title = response.data.items[i].volumeInfo.title;
                let author = response.data.items[i].volumeInfo.authors;
                (author === undefined) ? resultObj.author = "Anonymous" : resultObj.author = author;
                resultObj.description = response.data.items[i].volumeInfo.description;
                resultObj.image = response.data.items[i].volumeInfo.imageLinks.thumbnail;
                resultObj.link = response.data.items[i].volumeInfo.canonicalVolumeLink;
                resultObj.date = response.data.items[i].volumeInfo.publishedDate;
                results.push(resultObj);
            }
            //change search to true in order to display results
            this.setState({
                results: results,
                search: true
            })
        });
    }

    //update query value every time user inputs something in the search
    handleInput = event => {
        let value = event.target.value;
        this.setState({ query: value });
    }

    //when user submits a query, prevent page from refreshing and make an api call to
    //google books
    handleSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.query);
    }

    //add reading status to data and send as a post request
    saveBook = (data, status) => {
        let savedData = data;
        savedData.status = status;
        console.log(savedData);
        API.saveBook(savedData);
    }

    //only show results section title if user has submitted a search
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
                            <div className="dropdown-item" onClick={() => this.saveBook(results, "Reading")}>Add to Reading</div>
                            <div className="dropdown-item" onClick={() => this.saveBook(results, "Plan to Read")}>Add to Plan to Read</div>
                            <div className="dropdown-item" onClick={() => this.saveBook(results, "Completed")}>Add to Completed</div>
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