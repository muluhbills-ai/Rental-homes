import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Find Your Dream Home in Bambilli with RentEasy
        </h1>
        <p className={styles.subtitle}>
          Explore the best rental listings in your city — comfort, style, and affordability.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
