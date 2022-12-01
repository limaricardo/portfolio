import React from "react";
import styles from "../../styles/curriculo.module.css";

const EducationalExperiences = () => {
  return (
    <div className={styles.educationExperiences}>
      <div className={styles.timelineArea}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelines}>
            <h2>Formação Acadêmica</h2>
          </div>
          <div className={styles.allTimelines}>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>Março 2022 - Março 2023</h6> — Pós graduação em Análise e
                  desenvolvimento de Programas (EducaMais)
                </span>
                <div className={styles.tSquare}></div>
              </div>
            </div>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>Maio 2021 - Novembro 2021</h6> — Introduction to Computer
                  Science (Harvard)
                </span>
                <div className={styles.tSquare}></div>
              </div>
            </div>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>Fevereiro 2013 - Dezembro 2017</h6> — Engenharia Mecânica
                  (UniFOA)
                </span>
                <div className={styles.tSquare}></div>
              </div>
            </div>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>Fevereiro 2010 - Dezembro 2012</h6> — Técnico em
                  Eletromecânica (Escola Técnica Pandiá Calógeras)
                </span>
                <div className={styles.tSquare}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EducationalExperiences;