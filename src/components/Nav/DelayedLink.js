import { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const DelayedLink = ({ delay, to, id, ...props }) => {

  // useEffect(() => () => clearTimeout(elemento), []);

  const clickHandler = (e) => {
    e.preventDefault();
    const elemento = document.getElementById(id);

    console.log(elemento)

    setTimeout(() => {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, delay);
  
  };

  return <Link to={to} {...props} onClick={clickHandler} />;
};

export default DelayedLink;
