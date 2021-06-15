import React from "react";
import { Link } from "react-router-dom";

function Card({ title, id, img }) {
  return (
    <div key={id} className="card">
      <h4 className="card-title">{title}</h4>
      <img src={img} alt={title}></img>
      <Link to={`/post/${id}`}>
        <button className="button--primary">Read</button>
      </Link>
    </div>
  );
}

export default Card;
