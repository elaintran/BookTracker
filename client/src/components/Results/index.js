import React from "react";
import "./style.css";

function Results(props) {
    return (
        <div className="card-container">
            <a href={props.link} target="_blank" className="result-card">
                <div className="result-image">
                    <img src={props.image} className="book-image" alt={props.title}/> 
                </div>
                <div className="book-information">
                    <i className="fas fa-ellipsis-h"></i>
                    <h5>{props.title}</h5>
                    <h6>By {props.author}</h6>
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
    );
}

export default Results;