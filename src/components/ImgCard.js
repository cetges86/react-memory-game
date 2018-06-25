import React, { Component } from "react";
import characters from "../Images.json";

class ImgCard extends Component {

  // constructor(){
  //   super();
  //   // this.props.shuffle(this.props.characters)
  // }

  state = {
    clicked: false,
    score: 0,
    topScore: 0
  }

  handleClick = (event) => {
    event.preventDefault();
    if (this.state.clicked) {
      alert("You guessed incorrectly, already guessed!")
      this.setState({ topScore: this.state.score });
      this.setState({ score: 0 });
      this.props.shuffle(characters);

    } else {
      this.setState({ clicked: true })
      this.setState({ score: this.state.score + 1 })
      this.props.shuffle(characters);
      console.log('score: ' + this.state.score)
    }
  }

  render() {
    return (
      <div className="card col-3 shadow-lg">
        <div className="img-container" onClick={this.handleClick} >
          <img key={this.props.name} alt={this.props.name} src={this.props.img} />
        </div>
      </div>
    )
  };

}
export default ImgCard;
