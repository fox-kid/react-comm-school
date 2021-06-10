import React, { createContext, useState, useEffect } from "react";

import { getPosts } from "../api";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((data) => setPosts(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppContext.Provider value={{ posts, error, loading }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
