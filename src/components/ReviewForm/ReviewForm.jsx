import { useState, useEffect } from "react";
import styles from "./ReviewForm.module.css";

function ReviewForm() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setUserEmail(storedEmail);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
      userAction: null,
    };

    setReviews([newReview, ...reviews]);
    localStorage.setItem("userEmail", formData.email);
    setUserEmail(formData.email);

    setFormData({ name: "", email: "", message: "" });
  };

  const handleLike = (id) => {
    setReviews((prev) =>
      prev.map((review) => {
        if (review.id !== id) return review;

        if (review.userAction === "like") {
          // Toggle off like
          return { ...review, likes: review.likes - 1, userAction: null };
        } else if (review.userAction === "dislike") {
          // Switch from dislike to like
          return {
            ...review,
            dislikes: review.dislikes - 1,
            likes: review.likes + 1,
            userAction: "like",
          };
        } else {
          // Normal like
          return { ...review, likes: review.likes + 1, userAction: "like" };
        }
      })
    );
  };

  const handleDislike = (id) => {
    setReviews((prev) =>
      prev.map((review) => {
        if (review.id !== id) return review;

        if (review.userAction === "dislike") {
          // Toggle off dislike
          return { ...review, dislikes: review.dislikes - 1, userAction: null };
        } else if (review.userAction === "like") {
          // Switch from like to dislike
          return {
            ...review,
            likes: review.likes - 1,
            dislikes: review.dislikes + 1,
            userAction: "dislike",
          };
        } else {
          // Normal dislike
          return { ...review, dislikes: review.dislikes + 1, userAction: "dislike" };
        }
      })
    );
  };

  const handleDelete = (id) => {
    const review = reviews.find((r) => r.id === id);

    if (review && userEmail === review.email) {
      if (window.confirm("Are you sure you want to delete your review?")) {
        setReviews(reviews.filter((r) => r.id !== id));
      }
    } else {
      alert("You can only delete your own review.");
    }
  };

  return (
    <div className={styles.reviewContainer}>
      <h2>Share Your Experience</h2>

      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Write your review..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>

      {/* Display Reviews */}
      <div className={styles.reviewList}>
        {reviews.length === 0 ? (
          <p className={styles.noReviews}>No reviews yet — be the first!</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className={styles.reviewCard}>
              <p className={styles.reviewMessage}>"{r.message}"</p>
              <p className={styles.reviewMeta}>
                — <strong>{r.name}</strong> on {r.date}
              </p>

              <div className={styles.reactionRow}>
                <button
                  type="button"
                  className={`${styles.likeButton} ${
                    r.userAction === "like" ? styles.active : ""
                  }`}
                  onClick={() => handleLike(r.id)}
                >
                  👍 <span>{r.likes}</span>
                </button>
                <button
                  type="button"
                  className={`${styles.dislikeButton} ${
                    r.userAction === "dislike" ? styles.active : ""
                  }`}
                  onClick={() => handleDislike(r.id)}
                >
                  👎 <span>{r.dislikes}</span>
                </button>
              </div>

              {userEmail === r.email && (
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(r.id)}
                >
                  🗑 Delete
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
