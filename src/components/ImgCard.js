import React, { Component } from "react";
//import characters from "../Images.json";

class ImgCard extends Component {

  render() {
    return (
      <div className="card col-3">
        <div className="img-container" >
          <img className="cardImg" alt={this.props.name} src={this.props.img} onClick={() => this.props.handleClick(this.props.name)} />
        </div>
      </div>
    )
  };

}
export default ImgCard;
