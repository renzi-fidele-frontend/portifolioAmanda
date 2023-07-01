import React, { useEffect, useState } from "react";
import styles from "./ProjectModal.module.css";
import ReactModal from "react-modal";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCross, FaWindowClose } from "react-icons/fa";

ReactModal.setAppElement("#root");

const ProjectModal = () => {
    const [isOpen, setIsOpen] = useState(false);

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
            {loc.state ? (
                <ReactModal isOpen={isOpen} onRequestClose={fechado} id={styles.container}>
                    <div className={styles.left}>
                        <video autoPlay src={loc.state.imagem}></video>
                    </div>
                    <div className={styles.right}>
                        <h5>{loc.state.titulo}</h5>
                        <div id={styles.detailsContainer}>
                            {/*Tipo */}
                            <div>
                                <h6>Tipo:</h6>
                                <p>{loc.state.tipo}</p>
                            </div>
                            {/*Linguagens */}
                            <div>
                                <h6>Linguagens:</h6>
                                <p>{loc.state.linguagens}</p>
                            </div>
                            {/*Plataforma */}
                            <div>
                                <h6>Plataforma:</h6>
                                <p>{loc.state.plataforma}</p>
                            </div>
                            {/*País */}
                            <div>
                                <h6>País:</h6>
                                <p>{loc.state.pais}</p>
                            </div>
                            {/*País */}
                            <div>
                                <h6>Url do projeto:</h6>
                                <p>{loc.state.link}</p>
                            </div>
                        </div>
                    </div>
                    <FaWindowClose onClick={fechado}>Fechar</FaWindowClose>
                </ReactModal>
            ) : undefined}
        </>
    );
};

export default ProjectModal;
