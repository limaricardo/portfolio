import React from "react";
import styles from "../../styles/hire.module.css";

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
        <p>Uhuuuuuul!!! Você não desiste mesmo em ?!</p>
        <p>
          Qualquer uma das opções agora irá te redirecionar para página de
          feedback. E aí, curtiu a experiência?
        </p>
        <div className={styles.buttonsModalDiv}>
          <div className={styles.buttonWrapperFree}>
            <div id="divButtonNo" className={styles.divButtonFreeNo}>
              <button onClick={onNoButtonClick}>Não</button>
            </div>
            <div id="divButtonYes" className={styles.divButtonFreeYes}>
              <button onClick={onRedirectPageClick}>
                Eu gostei, só cheguei aqui pelo desafio.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModalFree;
