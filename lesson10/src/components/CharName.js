import React, { useState, useEffect } from "react";

import { fetchUser } from "./api/index.js";

function CharName({ charName, setSeeMore, itemId, setPage }) {
  function handleCharClick() {
    setSeeMore((prev) => !prev);
    setPage(itemId);
  }

  return (
    <div className="charName" onClick={handleCharClick}>
      {charName}
    </div>
  );
}

export default CharName;
