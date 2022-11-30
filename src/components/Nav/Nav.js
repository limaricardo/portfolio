import React from "react";
import styles from '../../styles/nav.module.css';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import DelayedLink from "./DelayedLink";

const Nav = () => {

  const [clicked, setClicked] = useState(false)
  const [isSocialClicked, setIsSocialClicked] = useState(false)

  const onClickClass = (e) => {
    console.log(e.currentTarget.id)
    setClicked(e.currentTarget.id)

    setTimeout( () => {
      setClicked(false)
    }, 2000)
  }

  const onClickSocial = (e) => {
    console.log(e.currentTarget.id)
    setClicked(e.currentTarget.id)
    setIsSocialClicked(true)

    setTimeout( () => {
      setClicked(false)
      setIsSocialClicked(false)
    }, 2000)
  }
  

  console.log(clicked)
  

  return (

    <BrowserRouter>
      <div className={styles.navContainer}>
        <ul>
          <li id="curriculoLi" style={{zIndex: 5}} onClick={onClickClass} className={clicked === "curriculoLi" ? styles.liClickedCurriculo : styles.liHover}>
            <DelayedLink delay={600} to='#curriculo' id="curriculo">
              Curriculo
            </DelayedLink>
          </li>

          <li id="redeSocialLi" style={{zIndex: 4}} onClick={onClickSocial} className={clicked === "redeSocialLi" ? styles.liClickedRedeSocial : styles.liHover}>
            <DelayedLink delay={1000} to='#redeSocial' id="redeSocial">
              Redes Sociais
            </DelayedLink>
          </li>

          <li id="contactLi" style={{zIndex: 3}} onClick={onClickClass} className={clicked === "contactLi" ? styles.liClickedContact : styles.liHover}>
            <DelayedLink delay={600} to='#contact' id="contact">
              Contato
            </DelayedLink>  
          </li>

          <li id="projectsLi" style={{zIndex: 2}} onClick={onClickClass} className={clicked === "projectsLi" ? styles.liClickedProjects : styles.liHover}>
          <DelayedLink delay={600} to='#projects2' id="projects2">
            Projects
          </DelayedLink>  
          </li>

          <li id="hireLi" style={{zIndex: 1}} onClick={onClickClass} className={clicked === "hireLi" ? styles.liClickedHire : clicked === "projectsLi" ? "" : styles.liHover}>
          <DelayedLink delay={600} to='#hire' id="hire">
            Hire me!
          </DelayedLink> 
          </li>
        </ul>
      </div>
    </BrowserRouter>
  )
};

export default Nav;