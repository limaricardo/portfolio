import React from "react";
import styles from "../../styles/curriculo.module.css";

const BackNav = () => {
  const elemento = window.document.getElementById("nav");

  const onclick = () => {
    console.log(elemento);
    setTimeout(() => {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 1000);
  };

  return (
    <div className={styles.buttonBackNav}>
      <button onClick={onclick}>Voltar ao Menu</button>
    </div>
  );
};

export default BackNav;
