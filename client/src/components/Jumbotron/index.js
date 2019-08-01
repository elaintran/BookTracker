import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 className="title">Search for the <span className="emphasis">Perfect</span> Book</h1>
            <h4 className="subtitle">Explore the Google Books database for a new read.</h4>
        </div>
    );
}

export default Jumbotron;