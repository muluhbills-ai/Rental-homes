import { useParams } from "react-router-dom";
import houses from "../../data/houseData";
import styles from "./propertyDetailPage.module.css";

function PropertyDetailPage() {
  const { id } = useParams();
  const house = houses.find((h) => h.id.toString() === id);

  if (!house)
    return <div className={styles.notFound}>Property not found.</div>;

  return (
    <div className={styles.container}>
      <img src={house.image} alt={house.title} className={styles.image} />
      <div className={styles.details}>
        <h1>{house.title}</h1>
        <p className={styles.location}>{house.location}</p>
        <p className={styles.price}>${house.price.toLocaleString()}</p>
        <p className={styles.description}>{house.description}</p>
      </div>
    </div>
  );
}

export default PropertyDetailPage;
