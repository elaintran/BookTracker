import React from "react";
import Dropdown from "../Dropdown/index.js";
import "./style.css";

function Results(props) {
    return (
        <div className="card-container">
            <Dropdown bookData={props.bookData} save={props.save}>
                <i className="fas fa-ellipsis-h" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
            </Dropdown>
            <a href={props.bookData.link} target="_blank" className="result-card">
                <div className="result-image">
                    <img src={props.bookData.image} className="book-image" alt={props.bookData.title}/> 
                </div>
                <div className="book-information">
                    <h5>{props.bookData.title}</h5>
                    <h6>By {props.bookData.author}</h6>
                    <p>{props.bookData.description}</p>
                </div>
            </a>
        </div>
    );
}

export default Results;