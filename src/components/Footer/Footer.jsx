import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} RentEasy — Find Your Perfect Home.</p>
    </footer>
  );
}

export default Footer;
