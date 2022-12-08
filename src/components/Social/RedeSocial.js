import React from "react";
import styles from "../../styles/social.module.css";
import mockup from "../../assets/mockup.png";
import insta from "../../assets/insta.png";
import BackNav from "../Nav/BackNav";

const RedeSocial = () => {
  return (
    <div className={styles.socialContainer}>
      <BackNav className="buttonBackNavSocial"/>
      <img src={mockup} className={styles.mockupImg} alt="Mobile mockup"></img>
      <img src={insta} className={styles.instaImg} alt="LinkedIn that pop up on hover" />
      <ul>
        <li className={styles.github}>
          <a href="https://github.com/limaricardo" target="__blank">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa-brands fa-github"></span>
          </a>
        </li>
        <li className={styles.whatsapp}>
          <a href="https://wa.me/5524998512233" target="__blank">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa-brands fa-whatsapp"></span>
          </a>
        </li>
        <li className={styles.linkedin}>
          <a
            href="https://www.linkedin.com/in/ricardo-pereira-274b22aa/"
            target="__blank"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa-brands fa-linkedin-in"></span>
          </a>
        </li>
        <li className={styles.youtube}>
          <a
            href="https://www.youtube.com/channel/UCk_4NkFc5jj5qCoxAskRahg"
            target="__blank"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa-brands fa-youtube"></span>
          </a>
        </li>
        <li className={styles.discord}>
          <a href="https://discord.gg/cVe6eFAUdS" target="__blank">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa-brands fa-discord"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RedeSocial;
