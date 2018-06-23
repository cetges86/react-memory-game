import React, {Component} from "react";

class ScoreCounter extends Component {

    state = {
        score: 0,
        topScore:0
    }

    render(){
        return (
        <span className= "col text-right">Score: {this.state.score} | Top Score: {this.state.topScore}
        </span>
        );
    }
}

export default ScoreCounter;