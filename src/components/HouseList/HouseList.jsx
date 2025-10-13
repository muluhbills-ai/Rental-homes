import houses from "../../data/housesData";
import HouseCard from "../HouseCard/HouseCard";
import styles from "./HouseList.module.css";

function HouseList() {
  return (
    <div className={styles.list}>
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}

export default HouseList;
