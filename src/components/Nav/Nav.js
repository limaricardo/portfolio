import React from "react";
import styles from "../../styles/nav.module.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DelayedLink from "./DelayedLink";
import { i18n } from "../../Translate/i18n";

const I18N_STORAGE_KEY = "i18nextLng";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [isSocialClicked, setIsSocialClicked] = useState(false);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  console.log(language);

  const onClickClass = (e) => {
    setClicked(e.currentTarget.id);

    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  const onClickSocial = (e) => {
    setClicked(e.currentTarget.id);
    setIsSocialClicked(true);

    setTimeout(() => {
      setClicked(false);
      setIsSocialClicked(false);
    }, 2000);
  };

  const onPortugueseClick = () => {
    window.localStorage.setItem(I18N_STORAGE_KEY, "pt-BR");

    window.location = window.location;
  };

  const onEnglishClick = () => {
    window.localStorage.setItem(I18N_STORAGE_KEY, "en-US");

    window.location = window.location;
  };

  return (
    <>
      <BrowserRouter>
        <div className={styles.navContainer}>
          <div className={styles.languageSelect}>
            <span>{i18n.t("nav.legend.select")}</span>
            <div className={styles.languages}>
              <div
                className={
                  language === "pt-BR"
                    ? `${styles.portuguese} ${styles.activePortuguese}`
                    : `${styles.portuguese} ${styles.disabled}`
                }
                onClick={onPortugueseClick}
              >
                <img
                  src="https://i.imgur.com/5Afpluz.png"
                  alt="Brazilian Flag"
                />
                <span value="pt-BR">{i18n.t("nav.legend.pt")}</span>
              </div>
              <div
                className={
                  language === "en-US"
                    ? `${styles.english} ${styles.activeEnglish}`
                    : `${styles.english} ${styles.disabled}`
                }
                onClick={onEnglishClick}
              >
                <img
                  src="https://i.imgur.com/C98nH9F.png"
                  alt="Brazilian Flag"
                />
                <span value="en-US">{i18n.t("nav.legend.en")}</span>
              </div>
            </div>
          </div>
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
                {i18n.t("nav.curriculum")}
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
                {i18n.t("nav.social")}
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
                {i18n.t("nav.projects")}
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
                {i18n.t("nav.contact")}
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
                {i18n.t("nav.hire")}
              </DelayedLink>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Nav;
