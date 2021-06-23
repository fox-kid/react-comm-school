import { useState } from "react";
import Navigation from "../../components/Navigation";
// import styles from "./Search.module.css";
import SearchBar from "../../components/SearchBar";
import UserCard from "../../components/UserCard";

function Search() {
  const [filtered, setFiltered] = useState("");

  return (
    <main>
      <Navigation />
      <SearchBar setFiltered={setFiltered} />
      {filtered &&
        filtered.map((user) => (
          <UserCard
            key={user.login}
            username={user.login}
            img={user.avatar_url}
          />
        ))}
    </main>
  );
}

export default Search;
