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

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", email: "", message: "" });

    // 🚀 Email trigger
    try {
      await fetch("https://formsubmit.co/ajax/pennjude31@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "📝 New DreamRent Review",
          name: newReview.name,
          email: newReview.email,
          message: newReview.message,
        }),
      });
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Email failed:", error);
    }
  };

  const handleDelete = (id) => {
    const userEmail = prompt(
      "Enter the email used for this review to confirm deletion:"
    );
    const review = reviews.find((r) => r.id === id);

    if (review && userEmail === review.email) {
      setReviews(reviews.filter((r) => r.id !== id));
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
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(r.id)}
              >
                🗑 Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
