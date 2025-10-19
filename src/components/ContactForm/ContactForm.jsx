import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    // ✅ Replace this with your WhatsApp number (use international format, no "+" or spaces)
    const phoneNumber = "237696643198"; // Example: Cameroon number

    // ✅ Create the prefilled WhatsApp message
    const message = `Hello, my name is ${form.name}. My email is ${form.email}. 
Here is my message: ${form.message}`;

    // ✅ Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // ✅ WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // ✅ Redirect user to WhatsApp
    window.open(whatsappLink, "_blank");

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className={styles.container}>
      {submitted && <p className={styles.success}>✅ Redirecting to WhatsApp...</p>}
      {error && <p className={styles.error}>{error}</p>}

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
