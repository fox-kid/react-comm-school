import React, { useState, useEffect } from "react";

import { fetchUser } from "../api";
import User from "./User";
import ErrorBox from "./ErrorBox";
import ErrorMessage from "./ErrorMessage";

function UserOutput(props) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUser(props)
      .then((data) => setUser(data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="userBox">
      {error && (
        <ErrorBox>
          <ErrorMessage text="Something went wrong" />
        </ErrorBox>
      )}
      {loading ? <h1>Loading...</h1> : <User user={user.results[0]} />}
    </div>
  );
}

export default UserOutput;
