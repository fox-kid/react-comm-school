import React, { useContext } from "react";

import { AppContext } from "./context/AppContext";

function Names() {
  const { loading, error, posts } = useContext(AppContext);

  console.log(posts);
  return (
    <div className="names">
      {loading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {data && <div>this</div>}
    </div>
  );
}

export default Names();