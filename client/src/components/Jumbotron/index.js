import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h3 className="title">Search for the <span className="emphasis">Perfect</span> Book</h3>
            <h5 className="subtitle">Explore the Google Books database for a new read.</h5>
        </div>
    );
}

export default Jumbotron;