import React from "react";
import styles from "./About.module.css";

import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Devloper</h3>
              <p>
                I'm a frontend devloper with experience in building and
                optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Devloper</h3>
              <p>
                I have experience devloping fast and optimised back-end systems
                API
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UIicon" />
            <div className={styles.aboutItemText}>
              <h3>UI designer</h3>
              <p>
                I have designed multiples landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
