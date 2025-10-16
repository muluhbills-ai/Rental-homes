import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}> RentEasy🏠</div>
      <ul className={styles.links}>
        {["/", "/listings", "/about", "/contact"].map((path, idx) => {
          const labels = ["Home", "Listings", "About", "Contact"];
          return (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? styles.active : ""}
              >
                {labels[idx]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
