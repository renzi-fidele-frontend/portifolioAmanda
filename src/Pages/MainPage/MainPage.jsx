import React, { useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import icone from "../../Images/icone.svg";
import me from "../../Images/iii.jpg";
import { BsDownload, BsPhone } from "react-icons/bs";
import me1 from "../../Images/me2.jpg";
import { AiFillSkype, AiOutlineWhatsApp, AiFillMail } from "react-icons/ai";
import { SiGooglemeet } from "react-icons/si";
import crazy from "../../Images/crazy.jpg";
import { FaFilePdf } from "react-icons/fa";
import {CiMonitor} from "react-icons/ci"

const MainPage = () => {
    const skillsRef = useRef();

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            // Start animation when the section is in the viewport
            // Perform any animation logic here
            skillsRef.current.classList.toggle(styles.skillVisto);
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as per your requirement
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div id={styles.container}>
            {/*Seção Inicial */}
            <div id={styles.inicio}>
                <div>
                    {" "}
                    <div id={styles.left}>
                        <img id={styles.me} src={me} alt="" />
                        <i id={styles.iconTop}>
                            <svg viewBox="0 0 123 123" fill="var(--var-cor-decoracao)" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M44.4879 2.72729C18.0681 -8.74866 -8.74539 18.0655 2.73027 44.486L4.62443 48.8556C6.3577 52.8463 7.2521 57.1507 7.2521 61.5015C7.2521 65.8524 6.3577 70.1568 4.62443 74.1475L2.7272 78.5141C-8.74847 104.935 18.065 131.749 44.491 120.273L48.8574 118.375C52.848 116.642 57.1523 115.748 61.5031 115.748C65.8538 115.748 70.1581 116.642 74.1488 118.375L78.5152 120.273C104.932 131.749 131.748 104.935 120.273 78.511L118.376 74.1445C116.642 70.1537 115.748 65.8493 115.748 61.4985C115.748 57.1476 116.642 52.8432 118.376 48.8525L120.273 44.486C131.748 18.0655 104.935 -8.74866 78.5121 2.72729L74.1457 4.62457C70.1551 6.35788 65.8508 7.25231 61.5 7.25231C57.1492 7.25231 52.8449 6.35788 48.8543 4.62457L44.4879 2.72729Z"
                                    fill="var(--px-theme)"
                                ></path>
                            </svg>
                        </i>
                        <i id={styles.iconLow}>
                            <svg viewBox="0 0 123 123" fill="var(--var-cor-decoracao)" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M44.4879 2.72729C18.0681 -8.74866 -8.74539 18.0655 2.73027 44.486L4.62443 48.8556C6.3577 52.8463 7.2521 57.1507 7.2521 61.5015C7.2521 65.8524 6.3577 70.1568 4.62443 74.1475L2.7272 78.5141C-8.74847 104.935 18.065 131.749 44.491 120.273L48.8574 118.375C52.848 116.642 57.1523 115.748 61.5031 115.748C65.8538 115.748 70.1581 116.642 74.1488 118.375L78.5152 120.273C104.932 131.749 131.748 104.935 120.273 78.511L118.376 74.1445C116.642 70.1537 115.748 65.8493 115.748 61.4985C115.748 57.1476 116.642 52.8432 118.376 48.8525L120.273 44.486C131.748 18.0655 104.935 -8.74866 78.5121 2.72729L74.1457 4.62457C70.1551 6.35788 65.8508 7.25231 61.5 7.25231C57.1492 7.25231 52.8449 6.35788 48.8543 4.62457L44.4879 2.72729Z"
                                    fill="var(--px-theme)"
                                ></path>
                            </svg>
                        </i>
                    </div>
                    <div id={styles.right}>
                        <h6>👋 Olá, me chamo</h6>
                        <h3>Renzi Fidele</h3>
                        <h4>Sou um desenvolvedor de front-end</h4>
                        <p>
                            Posso criar um site do nada, totalmente formado. Eu não uso truques, nem isso é mágica. Eu me especializei em
                            manipular a própria estrutura da web, suas matérias-primas de HTML, CSS, JavaScript e ReactJs.{" "}
                        </p>
                        <button>
                            <BsDownload /> Baixar CV
                        </button>
                    </div>
                </div>
            </div>

            {/*Seção sobre mim */}
            <div id={styles.sobre}>
                <div id={styles.left}>
                    <div id={styles.secaoSobre}>
                        <h2 className={styles.titulo1}>
                            <span>Sobre Mim</span>
                        </h2>
                        <h6>Meu nome é Renzi Fidele</h6>
                        <h5>Eu estou disponível para colaborar em projetos Web</h5>
                        <p>
                            Nascido em 2000, tipo AB morando nos EUA. Fornecemos design na tela para sites e aplicativos, bem como implementação
                            de front-end. Continuaremos a buscar uma ampla gama de expressões e melhores códigos buscando nossos “likes”.
                        </p>
                        <div id={styles.linha}>
                            <div>
                                <span>5k</span>
                                <p>
                                    Projetos <br /> Completados.
                                </p>
                            </div>
                            <div>
                                <span>3k</span>
                                <p>
                                    Clientes <br /> Satisfeitos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id={styles.secaoXP}>
                        <h2 className={styles.titulo1}>Experiência</h2>
                        <div>
                            <div className={styles.cardXP}>
                                <div id={styles.leftCard}>
                                    <img src="" alt="" />
                                </div>
                                <div id="rightCard">
                                    <span>2019 - Present</span>
                                    <h5>Art Director - Facebook Inc</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eius corrupti animi quis at quia corporis
                                        vitae! Voluptatibus consequuntur quo dolores obcaecati minus itaque assumenda, explicabo, recusandae ipsa
                                        ratione nobis!
                                    </p>
                                </div>
                            </div>
                            <div className={styles.cardXP}>
                                <div id={styles.leftCard}>
                                    <img src="" alt="" />
                                </div>
                                <div id="rightCard">
                                    <span>2019 - Present</span>
                                    <h5>Art Director - Facebook Inc</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eius corrupti animi quis at quia corporis
                                        vitae! Voluptatibus consequuntur quo dolores obcaecati minus itaque assumenda, explicabo, recusandae ipsa
                                        ratione nobis!
                                    </p>
                                </div>
                            </div>
                            <div className={styles.cardXP}>
                                <div id={styles.leftCard}>
                                    <img src="" alt="" />
                                </div>
                                <div id="rightCard">
                                    <span>2019 - Present</span>
                                    <h5>Art Director - Facebook Inc</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eius corrupti animi quis at quia corporis
                                        vitae! Voluptatibus consequuntur quo dolores obcaecati minus itaque assumenda, explicabo, recusandae ipsa
                                        ratione nobis!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={styles.right}>
                    <div ref={skillsRef}>
                        <div className={styles.duasCol}>
                            <img src={crazy} alt="" />
                            <div>
                                <a href="">
                                    <AiFillSkype />
                                    <span>Skype me</span>
                                </a>
                                <a href="">
                                    <AiFillMail />
                                    <span>Mail Me</span>
                                </a>
                                <a href="">
                                    <AiOutlineWhatsApp />
                                    <span>Whatsapp Me</span>
                                </a>
                                <a href="">
                                    <SiGooglemeet />
                                    <span>Meet Me</span>
                                </a>
                                <a href="">
                                    <FaFilePdf />
                                    <span>Resume</span>
                                </a>
                            </div>
                        </div>
                        <div id={styles.skills}>
                            <h2 className={styles.titulo1}>Habilidades</h2>
                            <div>
                                <div id={styles.skillLine}>
                                    <span>HTML5</span>
                                    <div>
                                        <div style={{ width: "92%" }}>
                                            <span>92%</span>
                                        </div>
                                    </div>
                                </div>
                                <div id={styles.skillLine}>
                                    <span>CSS</span>
                                    <div>
                                        <div style={{ width: "73%" }}>
                                            <span>73%</span>
                                        </div>
                                    </div>
                                </div>
                                <div id={styles.skillLine}>
                                    <span>JavaScript</span>
                                    <div>
                                        <div style={{ width: "81%" }}>
                                            <span>81%</span>
                                        </div>
                                    </div>
                                </div>
                                <div id={styles.skillLine}>
                                    <span>ReactJs</span>
                                    <div>
                                        <div style={{ width: "75%" }}>
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                                <div id={styles.skillLine}>
                                    <span>Firebase</span>
                                    <div>
                                        <div style={{ width: "55%" }}>
                                            <span>55%</span>
                                        </div>
                                    </div>
                                </div>
                                <div id={styles.skillLine}>
                                    <span>Wordpress / Elementor</span>
                                    <div>
                                        <div style={{ width: "65%" }}>
                                            <span>65%</span>
                                        </div>
                                    </div>
                                </div>
                                <div id={styles.skillLine}>
                                    <span>Python</span>
                                    <div>
                                        <div style={{ width: "70%" }}>
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>

                                <div id={styles.skillLine}>
                                    <span>Photoshop</span>
                                    <div>
                                        <div style={{ width: "30%" }}>
                                            <span>30%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Seção dos serviços*/}
            <div id={styles.servicos}>
                <h2 className={styles.titulo2}>
                    <span>Meus serviços</span>
                </h2>
                <div>
                    <div className={styles.serviceBox}>
                        <div className={styles.iconBox}>
                        <BsPhone/>
                        </div>

                        <div className={styles.conteudo}>
                            <h5>Web design</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, sed id nesciunt facilis numquam, ipsum
                                beatae sequi recusandae voluptatum tenetur culpa cumque laboriosam error. Reiciendis id repellat consequatur sed
                                officia?
                            </p>
                        </div>
                    </div>
                    <div className={styles.serviceBox}>
                        <div >
                            <i className={styles.iconBox}>
                            <CiMonitor/>
                            </i>
                            
                        </div>

                        <div className={styles.conteudo}>
                            <h5>Web design</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, sed id nesciunt facilis numquam, ipsum
                                beatae sequi recusandae voluptatum tenetur culpa cumque laboriosam error. Reiciendis id repellat consequatur sed
                                officia?
                            </p>
                        </div>
                    </div>
                    <div className={styles.serviceBox}>
                        <div className={styles.iconBox}></div>

                        <div className={styles.conteudo}>
                            <h5>Web design</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, sed id nesciunt facilis numquam, ipsum
                                beatae sequi recusandae voluptatum tenetur culpa cumque laboriosam error. Reiciendis id repellat consequatur sed
                                officia?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
