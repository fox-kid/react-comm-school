import React from "react";

function Card(props) {
  return (
    <div className="shopping-item">
      <h1>{props.title}</h1>
      <img src={props.src} alt={props.alt}></img>
      <div className="description">
          <span>{props.stock}</span>
          <span>{props.rating}</span>
      </div>
      <div className="badges">
          <span className="badge-1">
              {props.badge1}
          </span>
          <span className="badge-2">
              {props.badge2}
          </span>
      </div>
      <button>{props.button}</button>
    </div>
  );
}

export default Card;
