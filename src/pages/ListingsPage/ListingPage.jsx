import { useState } from "react";
import HouseList from "../../components/HouseList/HouseList";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import housesData from "../../data/houseData";
import styles from "./ListingPage.module.css";

function ListingsPage() {
  const [houses] = useState(housesData);

  // Filters state
  const [filters, setFilters] = useState({ location: "", maxPrice: "" });

  // Optional search on this page
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.page}>
      <h1>All Listings</h1>

      {/* Filter Panel */}
      <FilterPanel onFilter={setFilters} />

      {/* Optional search bar */}
      <HouseList
        houses={houses}
        searchQuery={searchQuery}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}

export default ListingsPage;
