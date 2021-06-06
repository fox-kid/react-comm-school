import React, { useState, useEffect } from "react";

import { fetchNames } from "./components/api/index.js";
import CharName from "./components/CharName";
import CharSeeMore from "./components/CharSeeMore"

function Characters() {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    fetchNames()
      .then((data) => {
        setChar(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : !seeMore ? (
        <div className="characters">
          {char.results.map((item) => (
            <CharName
              key={item.uid}
              charName={item.name}
              setSeeMore={setSeeMore}
              itemId={item.uid}
              setData={setData}
            />
          ))}
        </div>
      ) : (
        <CharSeeMore properties={data} setSeeMore={setSeeMore} />
      )}
    </div>
  );
}

export default Characters;
