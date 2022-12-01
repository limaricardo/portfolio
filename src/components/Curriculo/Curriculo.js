import React, { useEffect, useState } from "react";
import Certificates from "./Certificates";
import Flipcard from "./Flipcard";
import Skills from "./Skills";
import About from "./About";

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
        <BackNav />
        <header>
          <h1>Curriculo</h1>
        </header>
        <div className={styles.experiencesSection}>
          <Flipcard />
          <div className={styles.buttonsCurriculoDiv}>
            <button className={info.aboutInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, aboutInfo: true }))}>Sobre mim</button>
            <button className={info.professionalInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, professionalInfo: true }))}>
              Experiência Profissional
            </button>
            <button className={info.educationalInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, educationalInfo: true }))}>
              Formação Acadêmica
            </button>
            <button className={info.skillsInfo ? styles.infoSelected : ""} onClick={() => setInfo(state => ({ ...initialState, skillsInfo: true }))}>
              Habilidades
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








  {/* <Skills /> */}

        {/* <Experiences /> */}
        {/* <div className={styles.certificates}>
            <Certificates />
          </div> */}