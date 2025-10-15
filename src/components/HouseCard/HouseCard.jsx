import styles from "./HouseCard.module.css";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

function HouseCard({ house }) {
  return (
    <Link to={`/property/${house.id}`} className={styles.card}>
      {/* ✅ Use the first image in the images array */}
      <img
        src={house.images && house.images.length > 0 ? house.images[0] : "/assets/images/default.jpg"}
        alt={house.title}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3>{house.title}</h3>
        <p className={styles.location}>{house.location}</p>
        <p className={styles.price}>{formatPrice(house.price)}</p>
      </div>
    </Link>
  );
}

export default HouseCard;
