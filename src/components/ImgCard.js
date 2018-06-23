import React from "react";

const ImgCard = props => (
  <div className="card col-sm-3">
    <div className="img-container">
      <img key={props.id} alt={props.name} src={props.img} />
    </div>
  </div>
);

export default ImgCard;
