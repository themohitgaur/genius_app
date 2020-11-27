import React from "react";
import './result.css';

function Result(props) {
    return (
        <div id="one">
            <div className="imgThumb">
            <img src={props.image} alt="decription" ></img>
            </div>
            <div className="title">
            {props.title}
            </div>
        </div>
    );
}

export default Result;