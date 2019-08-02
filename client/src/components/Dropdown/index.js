import React from "react";
import "./style.css";

function Dropdown(props) {
    return (
        <div>
            <div className="dropdown">
                {props.children}
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={() => props.save(props.bookData)}>Add to Reading</a>
                    <a className="dropdown-item" href="#">Add to Plan to Read</a>
                    <a className="dropdown-item" href="#">Add to Completed</a>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;