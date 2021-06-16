import React from "react";
import { AppContextProvider } from "./context/AppContext";
import Routes from "./Routes";

function App() {
  return (
    <main className="container">
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </main>
  );
}

export default App;
