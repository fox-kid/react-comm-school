import React, { useState, useEffect } from "react";

import UserOutput from "./UserOutput";
// import { fetchUser } from "../api";
// import User from "./User";

function Dashboard() {
  const [users, setUsers] = useState([1]);
  const [counter, setCounter] = useState(2);

  function increaseUsers() {
    setUsers((prev) => prev.concat(counter));
    setCounter((prev) => prev + 1);
  }

  return (
    <section className="page-wrapper">
      <div className="info-wrapper">
        {users.map((item) => (
          <UserOutput key={item} page={counter - 1} />
        ))}
        {/* {error && <h1>{error}</h1>}
        {loading ? <h1>Loading...</h1> : <User user={user.results[0]} />} */}
      </div>
      <button className="button" onClick={increaseUsers}>
        Next
      </button>
    </section>
  );
}

export default Dashboard;
