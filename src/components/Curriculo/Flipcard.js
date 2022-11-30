import React, { useEffect, useState } from "react";
import styles from "../../styles/flipcard.module.css";

const Flipcard = () => {
  const [pageLoad, setPageLoad] = useState(false);
  const [isAboutActive, setisAboutActive] = useState(true);
  const [isSkillActive, setisSkillActive] = useState(false);
  console.log(isAboutActive);
  console.log(isSkillActive);

  useEffect(() => {
    setPageLoad(true);
  }, []);

  console.log(document.getElementById("aboutButton"));

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
            <button
              id="frontButton"
              className={styles.frontButton}
              onClick={onFrontClick}
            >
              Sobre mim
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
                About me
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
                Skills
              </button>
            </div>
            <div className={styles.textContainer}>
              {isAboutActive && (
                <>
                  <h4>ABOUT</h4>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
                  </p>
                </>
              )}
              {isSkillActive && (
                <>
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="" />
                  <img className={styles.iconImg} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </>
              )}
            </div>

            <button
              id="backButton"
              className={styles.backButton}
              onClick={onBackClick}
            >
              Voltar ao perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
