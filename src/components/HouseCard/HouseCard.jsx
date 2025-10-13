import styles from "./HouseCard.module.css";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

function HouseCard({ house }) {
  return (
    <Link to={`/property/${house.id}`} className={styles.card}>
      <img src={house.image} alt={house.title} className={styles.image} />
      <div className={styles.info}>
        <h3>{house.title}</h3>
        <p>{house.location}</p>
        <p className={styles.price}>{formatPrice(house.price)}</p>
      </div>
    </Link>
  );
}

export default HouseCard;
