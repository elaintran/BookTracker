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

    deleteBook = (id) => {
        API.deleteBook(id).then(this.getBooks());
    }

    renderResults() {
        if (this.state.results !== undefined && this.state.results.length !== 0) {
            return this.state.results.map(results =>
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
                    {/* <SectionTitle>Want To Read</SectionTitle>
                    <SectionTitle>Currently Reading</SectionTitle>
                    <SectionTitle>Completed</SectionTitle> */}
                    <SectionTitle>All Saved Books</SectionTitle>
                    {this.renderResults()}
                </Wrapper>
            </div>
        )
    }
}

export default Saved;