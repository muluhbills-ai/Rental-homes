import HeroSection from "../../components/HeroSection/HeroSection";
import HouseList from "../../components/HouseList/HouseList";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <section className={styles.listingsSection}>
        <h2>Featured Properties</h2>
        <HouseList />
      </section>
    </div>
  );
}

export default HomePage;
