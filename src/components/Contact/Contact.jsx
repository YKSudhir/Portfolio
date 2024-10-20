import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Emai Icon" />
          <a href="mailto:sudhirky05@gmail.com">My Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkdin Icon"
          />
          <a href="https://www.linkedin.com/in/sudhir-kumar-yadav-6b673a27a/">
            www.Linkdein.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/YKSudhir">www.github.com</a>
        </li>
      </ul>
    </footer>
  );
};
