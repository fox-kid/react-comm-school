import React, { useState, useEffect } from "react";

import { fetchUser } from "./api/index.js";

function CharName({ charName, setSeeMore, itemId, setData }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleCharClick() {
    setSeeMore((prev) => !prev);
  }

  useEffect(
    () =>
      fetchUser(itemId)
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => setLoading(false)),
    []
  );

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="charName" onClick={handleCharClick}>
          {charName}
        </div>
      )}
    </div>
  );
}

export default CharName;
