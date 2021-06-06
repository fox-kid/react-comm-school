import React from "react";

function CharSeeMore({ properties, setSeeMore }) {
  return (
    <div className="charSeeMore">
      <div className="charDetails">
        <span>Height: {properties.height}</span>
        <span>Mass: {properties.mass}</span>
        <span>Hair color: {properties.hair_color}</span>
        <span>Skin color: {properties.skin_color}</span>
        <span>Eye color: {properties.eye_color}</span>
        <span>Birth year: {properties.birth_year}</span>
        <span>Gender: {properties.gender}</span>
        <span>Created: {properties.created}</span>
        <span>Edited: {properties.edited}</span>
        <span>Name: {properties.name}</span>
      </div>
      <button className="goBack">Go back</button>
    </div>
  );
}

export default CharSeeMore;
