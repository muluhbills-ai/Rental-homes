import styles from "./AboutPage.module.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* ====== About Content ====== */}
      <section className={styles.aboutContent}>
        <h1>About Us</h1>
        <p>
          Welcome to <strong>DreamRent</strong> — your trusted platform for
          finding the best rental homes. We connect people to beautiful,
          affordable, and secure properties across the country.
        </p>
        <p>
          Our mission is to simplify the house-hunting process by offering
          transparent listings, verified agents, and a user-friendly experience.
        </p>
      </section>

      {/* ====== Reviews Section ====== */}
      <section className={styles.reviewsSection}>
        <ReviewForm />
      </section>

      {/* ====== Footer ====== */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} DreamRent. All rights reserved.
        </p>
        <p className={styles.footerNote}>
          Built with ❤️ to make your house-hunting experience easier.
        </p>
      </footer>
    </div>
  );
}

export default AboutPage;
