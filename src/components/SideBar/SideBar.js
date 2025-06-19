import React from "react";
import styles from "./SideBar.module.css";
import avatar from "../../assets/avatar.gif";

const SideBar = () => (
  <aside className={styles.panel}>
    <img src={avatar} alt="Avatar" className={styles.avatar} />
    <h2>Zoe Callaghan</h2>
    <p className={styles.role}>Software Engineer</p>
    <p className={styles.tag}>Code First Girls Ambassador</p>

    <div className={styles.details}>
      <div>
        <span>EMAIL</span>
        <a href="mailto:zoe@gmail.com">zoe@gmail.com</a>
      </div>
      <div>
        <span>PHONE</span>
        <a href="tel:+447551768063">+44 7551 768 063</a>
      </div>
      <div>
        <span>LOCATION</span>
        Leeds, UK
      </div>
    </div>

    <div className={styles.socials}>
      {/* drop in icon components or inline SVGs */}
    </div>
  </aside>
);

export default SideBar;
