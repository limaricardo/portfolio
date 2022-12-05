import React from "react";
import styles from "../../styles/hire.module.css";
import { i18n } from "../../Translate/i18n";

const HireModal = ({
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

  const onStillPageClick = () => {
    setShowModal(false);
    setIsStillOnPage(true);
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
    setShowModal(false);
    setCounter(0);
    element.style.display = "block";
  };

  return (
    <div className={styles.hireModal}>
      <div className={styles.hireModalContainer}>
        <p>{i18n.t("hire.firstModal.firstTxt")}</p>
        <p>{i18n.t("hire.firstModal.secondTxt")}</p>
        <div className={styles.buttonsModalDiv}>
          <div className={styles.buttonsModalDiv}>
            <div className={styles.buttonWrapperFree}>
              <div id="divButtonNo" className={styles.divButtonModalNo}>
                <button onClick={onStillPageClick}>
                  {i18n.t("hire.firstModal.continueBtn")}
                </button>
              </div>
              <div id="divButtonYes" className={styles.divButtonModalYes}>
                <button onClick={onRedirectPageClick}>
                  {i18n.t("hire.firstModal.formBtn")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
