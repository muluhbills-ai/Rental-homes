import { useState } from "react";
import styles from "./FilterPanel.module.css";

function FilterPanel({ onFilter }) {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleApply = () => {
    onFilter({ location, maxPrice });
  };

  return (
    <aside className={styles.panel}>
      <h3>Filter Listings</h3>
      <label>
        Location:
        <input
          type="text"
          placeholder="City or area"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          placeholder="xaf"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <button onClick={handleApply}>Apply Filters</button>
    </aside>
  );
}

export default FilterPanel;
