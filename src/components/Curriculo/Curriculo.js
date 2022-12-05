import React, { useEffect, useState } from "react";
import Certificates from "./Certificates";
import Flipcard from "./Flipcard";
import Skills from "./Skills";
import About from "./About";
import { i18n } from "../../Translate/i18n";

import styles from "../../styles/curriculo.module.css";
import ProfessionalExperiences from "./Professional";
import EducationalExperiences from "./Educational";
import BackNav from "../Nav/BackNav";

const Curriculo = () => {
  const initialState = {
    aboutInfo: false,
    professionalInfo: false,
    educationalInfo: false,
    skillsInfo: false,
  };

  const [info, setInfo] = useState(initialState);

  useEffect(() => {
    setInfo({ ...initialState, aboutInfo: true })
  }, [])

  
  return (
    <>
      <div className={styles.curriculoContainer}>
        <BackNav className="buttonBackNavCurriculo" />
        <header>
          <h1>{i18n.t('curriculum.titles.curriculum')}</h1>
        </header>
        <div className={styles.experiencesSection}>
          <Flipcard />
          <div className={styles.buttonsCurriculoDiv}>
            <button className={info.aboutInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, aboutInfo: true }))}>{i18n.t('curriculum.titles.aboutMe')}</button>
            <button className={info.professionalInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, professionalInfo: true }))}>
            {i18n.t('curriculum.titles.professional')}
            </button>
            <button className={info.educationalInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, educationalInfo: true }))}>
            {i18n.t('curriculum.titles.education')}
            </button>
            <button className={info.skillsInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, skillsInfo: true }))}>
            {i18n.t('curriculum.titles.skills')}
            </button>
          </div>
          <div className={styles.infoContainer}>
            {info.aboutInfo && <div className={styles.infoDiv}><About /></div>}
            {info.professionalInfo && <div className={styles.infoDiv}><ProfessionalExperiences /></div>}
            {info.educationalInfo && <div className={styles.infoDiv}><EducationalExperiences /></div>}
            {info.skillsInfo && <div className={styles.infoDiv}><Skills /></div>}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Curriculo;




