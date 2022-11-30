import React from "react";
import styles from '../styles/projects.module.css'

const Projects2 = () => {
  return (
    <div id="projects2" className={styles.containerProjects}>
      <input id="boxExplode" className={styles.boxExplode} type="button" />
      <div className={styles.box}>
        <a rel="noreferrer" href="http://ricardo-lima-1995-15-friendly-klipspringer-uk.eu-gb.mybluemix.net/" target="_blank" className={styles.card} id={styles.front}><div><img src="https://cdn.discordapp.com/attachments/990050467197374554/995391325207810108/Capturar3.PNG" width="246px" height="120px" /><h3>Sentiment Analyzer</h3><p>Este foi um projeto em Node.js e ReactJS do curso promovido pela IBM para analisar sentimento em um texto atráves do IBM Watson Natural Language Understanding.</p></div></a>
        <a rel="noreferrer" href="https://limaricardo.github.io/Drinksflix/" target="_blank" className={styles.card} id={styles.back}><div><img id={styles.inverter} src="https://cdn.discordapp.com/attachments/990050467197374554/995413440376082492/Capturar5.PNG" width="246px" height="120px" /><h3>MISTER DRINKSFLIX</h3><p>Clone da Netflix utilizando o tema do meu antigo empreendimento de delivery de drinks, o Mister Drinks.</p></div></a>
        <a rel="noreferrer" href="https://cryptoyou.herokuapp.com/calculator" target="_blank" className={styles.card} id={styles.left}><div><img src="https://cdn.discordapp.com/attachments/990050467197374554/995387472362094634/Capturar2.PNG" width="246px" height="120px" /><h3>CrypToYou</h3><p>CrypToYou é simulador de compra e venda de CriptoMoedas com o valor atual delas. Projeto realizado como conclusão do curso de Harvard CS50.</p></div></a>
        <a rel="noreferrer" href="https://app-todo-d6e95.web.app/" target="_blank" className={styles.card} id={styles.right}><div><img id={styles.inverter} src="https://cdn.discordapp.com/attachments/990050467197374554/995399311649165413/Capturar4.PNG" width="246px" height="120px" /><h3>To-do List</h3><p>Um dos primeiros projetos que realizei em ReactJS. Este é um to-do list com as cores padrões do instagram de arte "Artesbytela".</p></div></a>
        <a rel="noreferrer" href="https://contas-a-pagar-front.herokuapp.com" target="_blank" className={styles.card} id={styles.top}><div><img src="https://cdn.discordapp.com/attachments/990050467197374554/995381032763277332/unknown.png" width="246px" height="120px" /><h3>Contas a Pagar</h3><p>Contas a pagar é um projeto criado do zero, CRUD feito em Python + Flask, Front-End em ReactJS, deploy na plataforma Heroku.</p></div></a>
        <a rel="noreferrer" href="https://contas-a-pagar-front.herokuapp.com" target="_blank" className={styles.card} id={styles.bottom}><div><img src="https://cdn.discordapp.com/attachments/990050467197374554/995412803668152360/Bolao_ReactJs_1.png" width="246px" height="120px" /><h3>Bolão</h3><p>Projeto pessoal criado do zero em andamento. Bolão da copa do mundo em ReactJS e Node.js. Link para playlist no YouTube para acompanhar.</p></div></a>
      </div>
    </div>
  )
};

export default Projects2;





