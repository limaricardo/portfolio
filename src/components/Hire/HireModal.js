import React from "react";
import styles from "../../styles/hire.module.css";

const HireModal = ({ counter, setCounter, showModal, setShowModal, isStillOnPage, setIsStillOnPage, element }) => {

  const onStillPageClick = () => {
    setShowModal(false);
    setIsStillOnPage(true);
    element.style.display = "block";
  }

  const onRedirectPageClick = () => {

  }

  return (
    <div className={styles.hireModal}>
      <div className={styles.hireModalContainer}>
        <p>Parabéns pela persistência em clicar no botão "Não".</p>
        <p>
          Se tentar mais algumas vezes prometo liberar o clique. Deseja
          continuar tentando ou ser redirecionado para o formulário de contato?
        </p>
        <div className={styles.buttonsModalDiv}>
          <button onClick={onStillPageClick}>Continuar na página</button>
          <button onClick={onRedirectPageClick}>Ir para formulário</button>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
