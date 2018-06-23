import React from "react";

const ImgCard = props => (
  <div className="card col-3">
    <div className="img-container">
      <img key={props.name} alt={props.name} src={props.img} />
    </div>
  </div>
);

export default ImgCard;
