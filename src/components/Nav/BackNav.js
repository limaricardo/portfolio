import React, { useEffect, useState } from "react";
import "../../styles/buttonBack.css";

const BackNav = ({ className }) => {
  const [elemento, setElemento] = useState("");

  useEffect(() => {
    setElemento(window.document.getElementById("nav"));
  }, []);

  const onclick = () => {
    setTimeout(() => {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 1000);
  };

  return (
    <div className={className}>
      <button onClick={onclick}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/591/591855.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default BackNav;
