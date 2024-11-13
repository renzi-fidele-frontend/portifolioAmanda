import styles from "./ServicoCard.module.css";

const ServicoCard = ({ icone, titulo, descricao }) => {
   return (
      <div className={styles.serviceBox}>
         <div className={styles.iconContainer}>
            <i className={styles.iconBox}>{icone}</i>
         </div>
         <div className={styles.conteudo}>
            <h5>{titulo}</h5>
            <p>{descricao}</p>
         </div>
      </div>
   );
};

export default ServicoCard;
