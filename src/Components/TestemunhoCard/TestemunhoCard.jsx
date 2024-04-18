import React from "react";
import styles from "./TestemunhoCard.module.css";

const TestemunhoCard = ({ fotoCliente, topico, testemunho, nomeCliente, profissaoCliente }) => {
   return (
      <div className={styles.testemunhoCard}>
         <div id={styles.avatar}>
            <img src={fotoCliente} alt="" />
         </div>
         <div id={styles.historia}>
            <h5>{topico}</h5>
            <p>{testemunho}</p>
            <div>
               <p>{nomeCliente}</p>
               <span>{profissaoCliente}</span>
            </div>
         </div>
      </div>
   );
};

export default TestemunhoCard;
