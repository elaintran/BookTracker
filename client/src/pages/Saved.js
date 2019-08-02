import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import Wrapper from "../components/Wrapper/index.js";
import Results from "../components/Results/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import Card from "../components/Card/index.js";
import Dropdown from "../components/Dropdown/index.js";
import API from "../utils/API.js";

class Saved extends Component {
    state = {
        results: []
    }

    componentWillMount() {
        this.getBooks();
    }

    getBooks = () => {
        API.getBooks().then(response => {
            this.setState({ results: response.data });
            console.log(this.state.results);
        });
    }

    deleteBook = id => {
        API.deleteBook(id).then(this.getBooks());
        console.log(id);
    }

    // checkStatus = status => {
    //     const readingStatus = this.state.results.filter(results => results.status === status);

    // }

    renderResults(status) {
        let readingStatus = this.state.results.filter(results => results.status === status);
        if (readingStatus !== undefined && readingStatus.length !== 0) {
            return readingStatus.map(results =>
                <Card>
                    <Dropdown>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item">Move to Reading</div>
                            <div className="dropdown-item">Move to Plan to Read</div>
                            <div className="dropdown-item">Move to Completed</div>
                            <div className="dropdown-item" onClick={() => this.deleteBook(results._id)}>Delete Book</div>
                        </div>
                    </Dropdown>
                    <Results bookData={results} />
                </Card>
            )
        } else {
            return <SectionTitle>No books currently saved.</SectionTitle>;
        }
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="title">View All Your <span className="emphasis">Saved</span> Books</h1>
                    <h4 className="subtitle">Monitor your reading progress.</h4>
                </Jumbotron>
                <Wrapper>
                    <SectionTitle>Currently Reading</SectionTitle>
                    {this.renderResults("Reading")}
                    <SectionTitle>Completed</SectionTitle>
                    {this.renderResults("Completed")}
                    <SectionTitle>Plan to Read</SectionTitle>
                    {this.renderResults("Plan to Read")}
                </Wrapper>
            </div>
        )
    }
}

export default Saved;