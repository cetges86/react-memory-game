import React from "react";

const ScoreCounter = (props) => (
    <span className="col text-right">Score: {props.score} | Top Score: {props.topScore}
    </span>
);

export default ScoreCounter;