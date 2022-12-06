import React from "react";
import styles from "../../styles/curriculo.module.css";
import { i18n } from "../../Translate/i18n";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.timelineContainer}>
        <h2>{i18n.t('curriculum.subtitles.aboutMe')}</h2>
        <p>
          {i18n.t('curriculum.messages.aboutMe1stParag')}
        </p>
        <p>
          {i18n.t('curriculum.messages.aboutMe2ndParag')}
        </p>
        <p>
          {i18n.t('curriculum.messages.aboutMe3rdParag')}
        </p>
      </div>
    </div>
  );
};

export default About;
