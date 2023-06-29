import React, { useEffect, useState } from "react";
import styles from "./ProjectModal.module.css";
import ReactModal from "react-modal";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCross, FaWindowClose } from "react-icons/fa";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

ReactModal.setAppElement("#root");

const ProjectModal = ({ imagem, titulo, link, linguagens = [], plataforma, pais, tipo }) => {
    const [isOpen, setIsOpen] = useState(true);

    const loc = useLocation();

    const navegar = useNavigate();

    function aberto() {
        setIsOpen(true);
    }

    function fechado() {
        setIsOpen(false);
        navegar("/");
    }

    useEffect(() => {
        console.log(loc.hash);
        let l = loc.hash;
        if (l === "#projecto1" || l === "#projecto2" || l === "#projecto3" || l === "#projecto4" || l === "#projecto5" || l === "#projecto6") {
            setIsOpen(true);
        }
    }, [loc.hash]);

    return (
        <>
            <ReactModal isOpen={isOpen} onRequestClose={fechado} id={styles.container}>
                <div className={styles.left}>
                    <img src={imagem} alt="" />
                </div>
                <div className={styles.right}>
                    <h5>{titulo}</h5>
                    <div id={styles.detailsContainer}>
                        {/*Tipo */}
                        <div>
                            <h6>Tipo</h6>
                            <p>{tipo}</p>
                        </div>
                        {/*Linguagens */}
                        <div>
                            <h6>Linguagens</h6>
                            <p>{linguagens}</p>
                        </div>
                        {/*Plataforma */}
                        <div>
                            <h6>Plataforma</h6>
                            <p>{plataforma}</p>
                        </div>
                        {/*País */}
                        <div>
                            <h6>País:</h6>
                            <p>{pais}</p>
                        </div>
                        {/*País */}
                        <div>
                            <h6>Url do projeto:</h6>
                            <p>{link}</p>
                        </div>
                    </div>
                </div>
                <FaWindowClose onClick={fechado}>Fechar</FaWindowClose>
            </ReactModal>
        </>
    );
};

export default ProjectModal;
