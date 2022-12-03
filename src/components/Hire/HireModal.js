import React from "react";
import styles from "../../styles/hire.module.css";

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
        <p>Parabéns pela persistência em clicar no botão "Não".</p>
        <p>
          Se tentar mais algumas vezes prometo liberar o clique. Deseja
          continuar tentando ou ser redirecionado para o formulário de contato?
        </p>
        <div className={styles.buttonsModalDiv}>
          <div className={styles.buttonsModalDiv}>
            <div className={styles.buttonWrapperFree}>
              <div id="divButtonNo" className={styles.divButtonModalNo}>
                <button onClick={onStillPageClick}>Continuar</button>
              </div>
              <div id="divButtonYes" className={styles.divButtonFreeYes}>
                <button onClick={onRedirectPageClick}>Ir para formulário</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
