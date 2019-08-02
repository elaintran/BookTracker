import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import Wrapper from "../components/Wrapper/index.js";
import Results from "../components/Results/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
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
            // console.log(this.state.results);
        });
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
                    <SectionTitle>Saved Books</SectionTitle>
                    {this.state.results.map(results =>
                        <Results 
                            bookData={{
                                title: results.title,
                                author: results.author,
                                description: results.description,
                                image: results.image,
                                link: results.link,
                                date: results.date
                            }} />
                    )}
                </Wrapper>
            </div>
        )
    }
}

export default Saved;