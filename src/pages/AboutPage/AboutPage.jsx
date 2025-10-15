import { useRef } from "react";
import styles from "./AboutPage.module.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

function AboutPage() {
  const paragraphsRef = useRef([]);

  // Function to fade in text when tapped/clicked
  const handleFadeIn = (index) => {
    const p = paragraphsRef.current[index];
    if (p && !p.classList.contains(styles.show)) {
      p.classList.add(styles.show);
    }
  };

  return (
    <div className={styles.aboutPage}>
      {/* ===== About Section ===== */}
      <section className={styles.aboutContent}>
        <div className={styles.overlay}>
          <h1>About Us</h1>
          <p
            ref={(el) => (paragraphsRef.current[0] = el)}
            onClick={() => handleFadeIn(0)}
          >
            Welcome to <strong>DreamRent</strong> — your trusted platform for
            finding the best rental homes. We connect people to beautiful,
            affordable, and secure properties across the country.
          </p>
          <p
            ref={(el) => (paragraphsRef.current[1] = el)}
            onClick={() => handleFadeIn(1)}
          >
            Our mission is to simplify the house-hunting process by offering
            transparent listings, verified agents, and a user-friendly experience.
          </p>
        </div>
      </section>

      {/* ===== Reviews Section ===== */}
      <section className={styles.reviewsSection}>
        <ReviewForm />
      </section>

      {/* ===== Footer ===== */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} DreamRent. All rights reserved.</p>
        <p className={styles.footerNote}>
          Built with ❤️ to make your house-hunting experience easier.
        </p>
      </footer>
    </div>
  );
}

export default AboutPage;
