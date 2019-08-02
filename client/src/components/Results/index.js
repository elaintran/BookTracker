import React from "react";
import "./style.css";

function Results(props) {
    return (
        <div>
            <div className="result-card">
                <div className="result-image">
                    <img src={props.image} className="book-image" alt={props.title}/> 
                </div>
                <div className="book-information">
                    <h3>{props.title}</h3>
                    <h6>{props.author}</h6>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Results;