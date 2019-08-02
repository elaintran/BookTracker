import React from "react";

function Results(props) {
    return (
        <div>
            {/* {console.log(props)} */}
            <h3>{props.title}</h3>
            <h6>{props.author}</h6>
            <p>{props.description}</p>
        </div>
    );
}

export default Results;