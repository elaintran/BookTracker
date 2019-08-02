import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index.js";
import Wrapper from "../components/Wrapper/index.js";
import SectionTitle from "../components/SectionTitle/index.js";
import API from "../utils/API.js";

class Saved extends Component {

    // componentWillMount() {
    //     API.getBooks();
    // }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="title">View All Your <span className="emphasis">Saved</span> Books</h1>
                    <h4 className="subtitle">Monitor your reading progress.</h4>
                </Jumbotron>
                <Wrapper>
                    <SectionTitle>Want To Read</SectionTitle>
                    <SectionTitle>Currently Reading</SectionTitle>
                    <SectionTitle>Completed</SectionTitle>
                </Wrapper>
            </div>
        )
    }
}

export default Saved;