import styles from "./FilterPanel.module.css";

function FilterPanel() {
  return (
    <aside className={styles.panel}>
      <h3>Filter Listings</h3>
      <label>
        Location:
        <input type="text" placeholder="City or area" />
      </label>
      <label>
        Max Price:
        <input type="number" placeholder="$" />
      </label>
      <button>Apply Filters</button>
    </aside>
  );
}

export default FilterPanel;
