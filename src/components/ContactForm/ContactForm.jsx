import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={styles.container}>
      {submitted && <p className={styles.success}>Message sent! ✅</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
