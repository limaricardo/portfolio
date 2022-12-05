import React from "react";
import styles from "../../styles/curriculo.module.css";
import { i18n } from "../../Translate/i18n";

const EducationalExperiences = () => {
  return (
    <div className={styles.educationExperiences}>
      <div className={styles.timelineArea}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelines}>
            <h2>{i18n.t('curriculum.subtitles.education')}</h2>
          </div>
          <div className={styles.allTimelines}>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>{i18n.t('curriculum.messages.education.firstH6')}</h6>{i18n.t('curriculum.messages.education.firstTxt')}
                </span>
                <div className={styles.tSquare}></div>
              </div>
            </div>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>{i18n.t('curriculum.messages.education.secondH6')}</h6>{i18n.t('curriculum.messages.education.secondTxt')}
                </span>
                <div className={styles.tSquare}></div>
              </div>
            </div>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>{i18n.t('curriculum.messages.education.thirdH6')}</h6>{i18n.t('curriculum.messages.education.thirdTxt')}
                </span>
                <div className={styles.tSquare}></div>
              </div>
            </div>
            <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
              <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                <span>
                  <h6>{i18n.t('curriculum.messages.education.fourthH6')}</h6>{i18n.t('curriculum.messages.education.fourthTxt')}
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