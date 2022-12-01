import React, { useEffect, useState } from "react";
import styles from "../../styles/hire.module.css";
import BackNav from "../Nav/BackNav";

const Hire = () => {
  const [element, setElement] = useState(null);

  const contact = document.getElementById("contact");

  let positionXMouse;
  let positionYMouse;
  let positionXBox;
  let positionYBox;

  useEffect(() => {
    setElement(document.querySelector("#divButtonNo"));
  }, []);

  if (element) {
    element.addEventListener("mousemove", (e) => {
      positionXBox = e.x;
      positionYBox = e.y;
    });
  }

  window.addEventListener("mousemove", (e) => {
    positionXMouse = e.x;
    positionYMouse = e.y;

    if (positionXBox === positionXMouse && positionYBox === positionYMouse) {
      let randomTop = Math.floor(Math.random() * 12 - Math.random() * 76);
      let randomLeft = Math.floor(Math.random() * 30 - Math.random() * 58);
      element.style.position = "relative";
      element.style.top = `${randomTop}vh`;
      element.style.left = `${randomLeft}vw`;
    }
  });

  const onNoClick = () => {
    window.alert(
      "Parabéns pela insistência, você será redirecionado para deixar um feedback. Obrigado!"
    );
  };

  const onYesClick = () => {
    setTimeout(() => {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 500);
  };
  return (
    <div id="hire" className={styles.hireWrapper}>
      <BackNav className="buttonBackNavHire" />
      <div id="hire" className={styles.hireContainer}>
        <div className={styles.question}>
          <p>Gostou do portfólio e gostaria de entrar em contato?</p>
          <span>
            O <span style={{ color: "lightgreen" }}>SIM</span> irá te
            redirecionar para o formulário de feedbacks. <br /> O{" "}
            <span style={{ color: "red" }}>NÃO</span>, o não ... Vocês terão que
            descobrir hehehe
          </span>
        </div>
        <div className={styles.buttonWrapper}>
          <div id="divButtonYes" className={styles.divButtonYes}>
            <button onClick={onYesClick}>Sim</button>
          </div>
          <div id="divButtonNo" className={styles.divButtonNo}>
            <button onClick={onNoClick}>Não</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
