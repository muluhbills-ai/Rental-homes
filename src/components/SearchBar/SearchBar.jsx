import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by location or property name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
