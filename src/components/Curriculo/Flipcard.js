import React, { useEffect, useState } from "react";
import styles from "../../styles/flipcard.module.css";
import { i18n } from "../../Translate/i18n";

const Flipcard = () => {
  const [pageLoad, setPageLoad] = useState(false);
  const [isAboutActive, setisAboutActive] = useState(true);
  const [isSkillActive, setisSkillActive] = useState(false);

  useEffect(() => {
    setPageLoad(true);
  }, []);

  const flipCard = document.getElementById("flipCard");

  const onFrontClick = () => {
    flipCard.style.transform = "rotateY(-180deg)";
  };

  const onBackClick = () => {
    flipCard.style.transform = "rotateY(0deg)";
  };

  const onAboutClick = () => {
    if (isAboutActive) {
      return;
    } else {
      setisAboutActive(!isAboutActive);
      setisSkillActive(!isSkillActive);
    }
  };

  const onSkillClick = () => {
    if (isSkillActive) {
      return;
    } else {
      setisSkillActive(!isSkillActive);
      setisAboutActive(!isAboutActive);
    }
  };

  return (
    <div className={styles.flipCardContainer}>
      <div id="flipCard" className={styles.card}>
        <div id="frontCard" className={styles.front}>
          <div className={styles.frontCard}>
            <h2>Ricardo Pereira Lima</h2>
            <h3>DEV Front-End</h3>
            <button
              id="frontButton"
              className={styles.frontButton}
              onClick={onFrontClick}
            >
              {i18n.t('curriculum.messages.flipCard.aboutMe')}
            </button>
          </div>
        </div>
        <div id="backCard" className={styles.back}>
          <div className={styles.backCard}>
            <div className={styles.buttonsContainer}>
              <button
                id="aboutButton"
                className={
                  isAboutActive === true
                    ? `${styles.aboutButton} ${styles.clicked}`
                    : `${styles.aboutButton}`
                }
                onClick={onAboutClick}
              >
                {i18n.t('curriculum.messages.flipCard.info')}
              </button>
              <button
                id="skillsButton"
                className={
                  isSkillActive === true
                    ? `${styles.skillsButton} ${styles.clicked}`
                    : `${styles.skillsButton}`
                }
                onClick={onSkillClick}
              >
                {i18n.t('curriculum.messages.flipCard.technologies')}
              </button>
            </div>
            <div className={styles.textContainer}>
              {isAboutActive && (
                <>
                  <span><img className={styles.iconInfoCard} src="https://cdn-icons-png.flaticon.com/512/3870/3870998.png" alt=""/>Rio de Janeiro</span>
                  <span><img className={styles.iconInfoCard} src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt=""/>limaricardop@gmail.com</span>
                  <span><img className={styles.iconInfoCard} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/><a href="https://www.linkedin.com/in/ricardo-pereira-lima/" target="_blank">LinkedIn</a></span>
                  
                </>
              )}
              {isSkillActive && (
                <>
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    className={styles.iconImg}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt=""
                  />
                </>
              )}
            </div>

            <button
              id="backButton"
              className={styles.backButton}
              onClick={onBackClick}
            >
              {i18n.t('curriculum.messages.flipCard.backToProfile')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
