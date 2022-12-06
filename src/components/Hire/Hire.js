import React, { useEffect, useState } from "react";
import styles from "../../styles/hire.module.css";
import BackNav from "../Nav/BackNav";
import HireModal from "./HireModal";
import HireModalFree from "./HireModalFree";

import { i18n } from "../../Translate/i18n";

const Hire = () => {
  const [element, setElement] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isStillOnPage, setIsStillOnPage] = useState(false);

  let [counter, setCounter] = useState(0);

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
      element.style.display = "block";
      element.style.top = `${randomTop}vh`;
      element.style.left = `${randomLeft}vw`;
      setCounter(counter + 1);

      if (counter > 5 && !isStillOnPage) {
        setShowModal(true);
        element.style.display = "none";
      } else if (counter > 10 && isStillOnPage) {
        element.style.display = "none";
        setShowModal(true);
      }
    }
  });

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
          <h1>{i18n.t("hire.title")}</h1>
          <div className={styles.questionTxt}>
            <p><span>{i18n.t("hire.yes")}</span>{i18n.t("hire.yesTxt")}</p>
            <p><span>{i18n.t("hire.no")}</span>{i18n.t("hire.noTxt")}</p>
          </div>
        </div>
        {counter > 5 && showModal && !isStillOnPage && (
          <HireModal
            counter={counter}
            setCounter={setCounter}
            showModal={showModal}
            setShowModal={setShowModal}
            isStillOnPage={isStillOnPage}
            setIsStillOnPage={setIsStillOnPage}
            element={element}
            contact={contact}
          />
        )}
        {counter > 10 && showModal && isStillOnPage && (
          <HireModalFree
            counter={counter}
            setCounter={setCounter}
            showModal={showModal}
            setShowModal={setShowModal}
            isStillOnPage={isStillOnPage}
            setIsStillOnPage={setIsStillOnPage}
            element={element}
            contact={contact}
          />
        )}
        <div className={styles.buttonWrapper}>
          <div id="divButtonYes" className={styles.divButtonYes}>
            <button onClick={onYesClick}>{i18n.t("hire.yesBtn")} </button>
          </div>
          <div id="divButtonNo" className={styles.divButtonNo}>
            <button>{i18n.t("hire.noBtn")} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
