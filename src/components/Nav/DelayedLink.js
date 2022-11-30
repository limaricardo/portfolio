import { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const DelayedLink = ({ delay, to, id, ...props }) => {

  // useEffect(() => () => clearTimeout(elemento), []);

  const clickHandler = (e) => {
    e.preventDefault();
    const elemento = document.getElementById(id);
    const buttonExplode = document.getElementById("boxExplode");

    console.log(elemento)

    setTimeout(() => {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, delay);

    if(id === "projects2") {
      setTimeout(() => {
        buttonExplode.focus();
      }, 1100)
    }
    
  };

  return <Link to={to} {...props} onClick={clickHandler} />;
};

export default DelayedLink;
