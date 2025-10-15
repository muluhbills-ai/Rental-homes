import HouseCard from "../HouseCard/HouseCard";
import styles from "./HouseList.module.css";

function HouseList({ houses, searchQuery = "", filters = {} }) {
  const filteredHouses = houses.filter((house) => {
    const q = searchQuery.toLowerCase();
    const locFilter = (filters.location || "").toLowerCase();
    const maxPriceNum = Number(filters.maxPrice) || null;

    const title = (house.title || "").toLowerCase();
    const location = (house.location || "").toLowerCase();

    const matchesSearch = !q || title.includes(q) || location.includes(q);
    const matchesLocation = !locFilter || location.includes(locFilter);
    const matchesPrice = !maxPriceNum || Number(house.price) <= maxPriceNum;

    return matchesSearch && matchesLocation && matchesPrice;
  });

  if (!filteredHouses.length) return <p>No properties match your search.</p>;

  return (
    <div className={styles.list}>
      {filteredHouses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}

export default HouseList;
