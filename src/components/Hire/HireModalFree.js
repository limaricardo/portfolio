import React from "react";
import styles from "../../styles/hire.module.css";
import { i18n } from "../../Translate/i18n";

const HireModalFree = ({
  counter,
  setCounter,
  showModal,
  setShowModal,
  isStillOnPage,
  setIsStillOnPage,
  element,
  contact,
}) => {
  element.style.display = "none";

  const onNoButtonClick = () => {
    setTimeout(() => {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 500);
    setIsStillOnPage(false);
    setCounter(0);
    setShowModal(false);
    element.style.display = "block";
  };

  const onRedirectPageClick = () => {
    setTimeout(() => {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 500);
    setIsStillOnPage(false);
    setCounter(0);
    setShowModal(false);
    element.style.display = "block";
  };

  return (
    <div className={styles.hireModal}>
      <div className={styles.hireModalContainer}>
        <p>{i18n.t("hire.secondModal.firstTxt")}</p>
        <p>
        {i18n.t("hire.secondModal.secondTxt")}
        </p>
        <div className={styles.buttonsModalDiv}>
          <div className={styles.buttonWrapperFree}>
            <div id="divButtonNo" className={styles.divButtonFreeNo}>
              <button onClick={onNoButtonClick}>{i18n.t("hire.secondModal.noBtn")}</button>
            </div>
            <div id="divButtonYes" className={styles.divButtonFreeYes}>
              <button onClick={onRedirectPageClick}>
              {i18n.t("hire.secondModal.likeBtn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModalFree;
