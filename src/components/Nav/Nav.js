import React from "react";
import styles from "../../styles/nav.module.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DelayedLink from "./DelayedLink";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [isSocialClicked, setIsSocialClicked] = useState(false);

  const I18N_STORAGE_KEY = 'i18nextLng'

  const onClickClass = (e) => {
    console.log(e.currentTarget.id);
    setClicked(e.currentTarget.id);

    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  const onClickSocial = (e) => {
    console.log(e.currentTarget.id);
    setClicked(e.currentTarget.id);
    setIsSocialClicked(true);

    setTimeout(() => {
      setClicked(false);
      setIsSocialClicked(false);
    }, 2000);
  };

  console.log(clicked);

  const handleSelectChange = (e) => {
    window.localStorage.setItem(
      I18N_STORAGE_KEY,
      e.target.value
    );
    window.location = window.location
  };

  return (
    <>
      <BrowserRouter>
        <div className={styles.navContainer}>
          <select onChange={handleSelectChange}>
            <option>Selecione um idioma</option>
            <option value="pt-BR">PT</option>
            <option value="en-US">EN</option>
          </select>
          <ul>
            <li
              id="curriculoLi"
              style={{ zIndex: 5 }}
              onClick={onClickClass}
              className={
                clicked === "curriculoLi"
                  ? styles.liClickedCurriculo
                  : styles.liHover
              }
            >
              <DelayedLink delay={1000} to="#curriculo" id="curriculo">
                Currículo
              </DelayedLink>
            </li>

            <li
              id="redeSocialLi"
              style={{ zIndex: 4 }}
              onClick={onClickSocial}
              className={
                clicked === "redeSocialLi"
                  ? styles.liClickedRedeSocial
                  : styles.liHover
              }
            >
              <DelayedLink delay={1000} to="#redeSocial" id="redeSocial">
                Redes Sociais
              </DelayedLink>
            </li>

            <li
              id="projectsLi"
              style={{ zIndex: 3 }}
              onClick={onClickClass}
              className={
                clicked === "projectsLi"
                  ? styles.liClickedProjects
                  : styles.liHover
              }
            >
              <DelayedLink delay={600} to="#projects2" id="projects2">
                Projetos
              </DelayedLink>
            </li>

            <li
              id="contactLi"
              style={{ zIndex: 2 }}
              onClick={onClickClass}
              className={
                clicked === "contactLi"
                  ? styles.liClickedContact
                  : styles.liHover
              }
            >
              <DelayedLink delay={600} to="#contact" id="contact">
                Contato
              </DelayedLink>
            </li>

            <li
              id="hireLi"
              style={{ zIndex: 1 }}
              onClick={onClickClass}
              className={
                clicked === "hireLi"
                  ? styles.liClickedHire
                  : clicked === "projectsLi"
                  ? ""
                  : styles.liHover
              }
            >
              <DelayedLink delay={600} to="#hire" id="hire">
                Contrate-me
              </DelayedLink>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Nav;
