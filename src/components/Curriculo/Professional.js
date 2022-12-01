import React from "react";
import styles from "../../styles/curriculo.module.css";

const ProfessionalExperiences = () => {
  return (
    <div className={styles.experiencesDiv}>
      <div className={styles.workExperiencesSection}>
        <div className={styles.timelineArea}>
          <div className={styles.timelineContainer}>
            <div className={styles.timelines}>
              <h2>Experiência Profissional</h2>
            </div>
            <div className={styles.allTimelines}>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div
                  className={`${`${styles.timelineText} ${styles.dFlex2}`} ${
                    styles.dFlex2
                  }`}
                >
                  <span>
                    <h6>Julho 2022 - atual</h6> — Desenvolvedor Front-End
                    (Wexpert Consulting)
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>Junho 2022 - atual</h6> — Professor Full-Stack
                    assistente (Blue EdTech)
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>Abril 2020 - Outubro 2022</h6> — Rater Web (Telus
                    International)
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>Julho 2019 - Abril 2020</h6> — Search Engine Evaluator
                    (Appen)
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>Março 2018 - Novembro 2018 </h6> — Controlador de
                    Aspecto (Groupe PSA)
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>Setembro 2016 - Dezembro 2017</h6> — Estagiário de
                    engenharia de processos (Faurecia Automotive)
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperiences;
