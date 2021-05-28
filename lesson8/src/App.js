import React, { useState } from "react";

import Login from "./components/Login";
import Layout from "./components/Layout";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <main className="container">
      <Login setPersons={setPersons} />
      <Layout persons={persons}/>
    </main>
  );
}

export default App;
