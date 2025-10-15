import styles from "./SearchBar.module.css";

function SearchBar({ query, setQuery }) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search by location or property name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
