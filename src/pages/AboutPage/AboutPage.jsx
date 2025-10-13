import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>DreamRent</strong> — your trusted platform for finding
        the best rental homes. We connect people to beautiful, affordable, and
        secure properties across the country.
      </p>
      <p>
        Our mission is to simplify the house-hunting process by offering
        transparent listings, verified agents, and a user-friendly experience.
      </p>
    </div>
  );
}

export default AboutPage;
