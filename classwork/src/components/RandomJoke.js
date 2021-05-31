import React, { useState } from "react";

import History from "./History";

const jokes = [];

function RandomJoke() {
  const [joke, setJoke] = useState("");

  function fetchData() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }

  joke !== "" ? jokes.push(joke) : null;
  console.log(jokes);
  return (
    <section className="wrapper">
      <button onClick={fetchData}>Show joke</button>
      <div className="joke-line">{joke}</div>
      <History value={jokes}></History>
    </section>
  );
}

export default RandomJoke;
