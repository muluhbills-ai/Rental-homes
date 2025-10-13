import { useState } from "react";
import HouseList from "../../components/HouseList/HouseList";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./ListingsPage.module.css";

function ListingsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className={styles.page}>
      <h1>Available Rentals</h1>
      <SearchBar onSearch={(q) => console.log("Searching for:", q)} />
      <FilterPanel />
      <HouseList />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ListingsPage;
