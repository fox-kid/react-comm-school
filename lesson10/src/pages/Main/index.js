import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import CharName from "../../components/CharName";

function Main() {
  const { loading, error, data } = useContext(AppContext);

  return (
    <div className="characters">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data.length &&
        data.map((item) => (
          <CharName key={item.uid} name={item.name} id={item.uid} />
        ))}
    </div>
  );
}

export default Main;
