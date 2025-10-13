import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Fill out the form below to reach our team.</p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
