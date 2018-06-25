import React, { Component } from "react";
import characters from "../Images.json";

class ImgCard extends Component {

  state = {
    clickedCharacters: []
  }

  handleChange = (clickTarget) => {
    this.setState((prevState) => {
      return { clickedCharacters: [...prevState.clickedCharacters, clickTarget] }
    });
  }

  handleClick = (event) => {
    event.preventDefault();

    if (this.state.clickedCharacters.includes(event.target.alt)) {
      alert("You guessed incorrectly, already guessed!")
      this.props.gameReset();
    } else {
      this.handleChange(event.target.alt);
      console.log(this.state.clickedCharacters);
      this.props.handleIncrement();
      this.props.shuffle(characters);
    }
  }

  render() {
    return (
      <div className="card col-3">
        <div className="img-container" >
          <img alt={this.props.name} src={this.props.img} onClick={this.handleClick} />
        </div>
      </div>
    )
  };

}
export default ImgCard;
