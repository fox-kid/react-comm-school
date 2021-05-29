import React, { useState } from "react";

function History(jokesArray = { jokes }) {
  const [showHistory, setShowHistory] = useState(false);
  
  const onClick = () =>
    showHistory == false ? setShowHistory(true) : setShowHistory(false);
  // function showHistory() {
  //   <div className="history">
  //     {jokesArray.value.map((joke) => console.log({ joke }))}
  //   </div>;
  // }
  return (
    <div className="history">
      <button onClick={onClick}>Show History</button>

      {showHistory ? (
        <div className="historyBox">
          {jokesArray.value.map((joke) => (
            <span key={jokesArray.length}>{JSON.stringify(joke)}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default History;
