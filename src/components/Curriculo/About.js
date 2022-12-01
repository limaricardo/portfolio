import React from "react";
import styles from "../../styles/curriculo.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.timelineContainer}>
        <h2>Perfil</h2>
        <p>
          Desenvolvedor Front-End com experiência em desenvolvimento Web/Desktop
          com React / Node.js / Electron.
          <br/><br/>
          Comunicativo e paixão por compartilhar conhecimento me levaram a criar
          um canal no YouTube e virar professor na BlueEdTech, onde atuo como
          professor assistente Full-Stack.<br/><br/>Dinâmico, boa comunicação e flexível.
          Procuro por desafios que me deem oportunidade de expandir meus
          conhecimentos e experiência em desenvolvimento Front-end com React /
          TypeScript. Atualmente trabalho meio período, parte da noite, como
          professor assistente Full-Stack na BlueEdTech.
        </p>
      </div>
    </div>
  );
};

export default About;
