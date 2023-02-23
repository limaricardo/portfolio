import React from "react";
import styles from "../../styles/curriculo.module.css";
import { i18n } from "../../Translate/i18n";

const ProfessionalExperiences = () => {
  return (
    <div className={styles.experiencesDiv}>
      <div className={styles.workExperiencesSection}>
        <div className={styles.timelineArea}>
          <div className={styles.timelineContainer}>
            <div className={styles.timelines}>
              <h2>{i18n.t('curriculum.subtitles.professional')}</h2>
            </div>
            <div className={styles.allTimelines}>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div
                  className={`${`${styles.timelineText} ${styles.dFlex2}`} ${
                    styles.dFlex2
                  }`}
                >
                  <span>
                    <h6>{i18n.t('curriculum.messages.professional.mostRecentH6')}</h6>{i18n.t('curriculum.messages.professional.mostRecentTxt')}
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div
                  className={`${`${styles.timelineText} ${styles.dFlex2}`} ${
                    styles.dFlex2
                  }`}
                >
                  <span>
                    <h6>{i18n.t('curriculum.messages.professional.firstH6')}</h6>{i18n.t('curriculum.messages.professional.firstTxt')}
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>{i18n.t('curriculum.messages.professional.secondH6')}</h6>{i18n.t('curriculum.messages.professional.secondTxt')}
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>{i18n.t('curriculum.messages.professional.thirdH6')}</h6>{i18n.t('curriculum.messages.professional.thirdTxt')}
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>{i18n.t('curriculum.messages.professional.fourthH6')}</h6>{i18n.t('curriculum.messages.professional.fourthTxt')}
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>{i18n.t('curriculum.messages.professional.fifthH6')}</h6>{i18n.t('curriculum.messages.professional.fifthTxt')}
                  </span>
                  <div className={styles.tSquare}></div>
                </div>
              </div>
              <div className={`${styles.singleTimeline} ${styles.dFlex2}`}>
                <div className={`${styles.timelineText} ${styles.dFlex2}`}>
                  <span>
                    <h6>{i18n.t('curriculum.messages.professional.sixthH6')}</h6>{i18n.t('curriculum.messages.professional.sixthTxt')}
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
