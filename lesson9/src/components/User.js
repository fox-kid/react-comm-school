import React from "react";

function User(props) {
  return (
    <div className="userInfo" key={props.user.id}>
      <img src={props.user.picture.medium}></img>
      <span>{props.user.email}</span>
      <span>
        {props.user.name.title} {props.user.name.first} {props.user.name.last}
      </span>
      <span>{props.user.location.city}</span>
      <span>{props.user.dob.age}</span>
      <span>{props.user.dob.date}</span>
      <button className="button">See more</button>
    </div>
  );
}

export default User;
