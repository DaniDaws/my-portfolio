import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <p>
        Why not check out my{" "}
        <a href="https://www.linkedin.com/in/danielle-d-7936232a2/">
          LinkedIn account
        </a>
        ?
      </p>
    </section>
  );
};

export default Contact;
