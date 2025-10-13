import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.pageButton} ${page === currentPage ? styles.active : ""}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
