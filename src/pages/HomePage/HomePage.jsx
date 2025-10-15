import { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import HouseList from "../../components/HouseList/HouseList";
import SearchBar from "../../components/SearchBar/SearchBar";
import housesData from "../../data/houseData";
import styles from "./HomePage.module.css";

function HomePage() {
  const [houses] = useState(housesData);

  // Search query for top search bar
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.home}>
      <HeroSection />

      {/* Top search only */}
      <section className={styles.controls}>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      </section>

      {/* Featured Properties */}
      <section className={styles.listingsSection}>
        <h2>Featured Properties</h2>
        <HouseList houses={houses} searchQuery={searchQuery} />
      </section>
    </div>
  );
}

export default HomePage;
