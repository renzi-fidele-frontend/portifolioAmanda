import React, { useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";
import curiculo from "../../Images/FrontEnd.pdf";

//  Imagens
import video1 from "../../Videos/demoNossoBlog.webm";
import video2 from "../../Videos/demoCustos.webm";
import video3 from "../../Videos/FilmeLib.webm";
import demo4 from "../../Images/DemoDiabetes.jpg";
import demo5 from "../../Images/demoCarlessi.gif";
import demo6 from "../../Images/demoPanetones.gif";

import avatar1 from "../../Images/avatar1.gif";
import me from "../../Images/iii.jpg";
import crazy from "../../Images/crazy.jpg";
import logo from "../../Images/lg.png";

//  Icons
import { BiCopyAlt, BiSolidMessageAltDetail, BiSolidPhoneCall, BiVideo } from "react-icons/bi";
import { SiGoogleads } from "react-icons/si";
import { FaBars, FaFilePdf } from "react-icons/fa";
import { ImNewTab, ImLocation2 } from "react-icons/im";
import { BsDownload, BsGlobe, BsPlusCircle } from "react-icons/bs";
import { AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { MdOutlineDesignServices, MdOutlineWorkHistory } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

//  Typewriter
import Typewriter from "typewriter-effect";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { NavValue } from "../../Context/NavContext";

const MainPage = () => {
    const skillsRef = useRef();

    const cardHover = useRef();

    const loc = useLocation();

    const secinicio = useRef();
    const secSobre = useRef();
    const secServicos = useRef();
    const secPortifolio = useRef();
    const secContacto = useRef();
    const secTestemunhos = useRef();

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

    const navegar = useNavigate();

    //  Contexto da nav
    const navAtivo = NavValue();

    useEffect(() => {
        console.log(navAtivo.nav);
    }, [navAtivo.nav]);

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

    useEffect(() => {
        const s = loc.hash;
        if (s === "#inicio") {
            secinicio.current.scrollIntoView({ behavior: "smooth" });
        } else if (s === "#sobre") {
            secSobre.current.scrollIntoView({ behavior: "smooth" });
        } else if (s === "#servicos") {
            secServicos.current.scrollIntoView({ behavior: "smooth" });
        } else if (s === "#portifolio") {
            secPortifolio.current.scrollIntoView({ behavior: "smooth" });
        } else if (s === "#contacto") {
            secContacto.current.scrollIntoView({ behavior: "smooth" });
        } else if (s === "#testemunhos") {
            secTestemunhos.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [loc.hash]);

    return (
        <div id={styles.container}>
            {/*Header invisivel */}
            <header id={styles.header}>
                <img
                    src={logo}
                    alt="logo "
                    onClick={() => {
                        secinicio.current.scrollIntoView({ behavior: "smooth" });
                    }}
                />
                <span
                    onClick={(e) => {
                        navAtivo.setNav(!navAtivo.nav);
                    }}
                >
                    <FaBars />
                </span>
            </header>

            {/*Seção Inicial */}
            <section
                ref={secinicio}
                onMouseEnter={() => {
                    navegar("/#inicio");
                }}
                id={styles.inicio}
            >
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
                        <h4>
                            Sou<span></span>
                            <Typewriter
                                options={{
                                    strings: ["um desenvolvedor de front-end", "um programador", "a melhor escolha pra você"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    wrapperClassName: styles.textoDinamico,
                                }}
                            />
                        </h4>
                        <p>
                            Posso criar um site do nada, totalmente formado. Eu não uso truques, nem isso é mágica. Eu me especializei em
                            manipular a própria estrutura da web, suas matérias-primas de HTML, CSS, JavaScript e ReactJs.{" "}
                        </p>

                        <a href="portfolio-renzi.vercel.app/src/Images/PersonalCv.pdf" download={"Renzi_Fidele.pdf"} target="_blank">
                            <BsDownload /> Baixar CV
                        </a>
                    </div>
                </div>
            </section>

            {/*Seção sobre mim */}
            <section
                ref={secSobre}
                onMouseEnter={() => {
                    navegar("/#sobre");
                }}
                id={styles.sobre}
            >
                <div id={styles.left}>
                    <div id={styles.secaoSobre}>
                        <h2 className={styles.titulo1}>
                            <span>Sobre Mim</span>
                        </h2>
                        <h6>Meu nome é Renzi Fidele</h6>
                        <h5>Eu estou disponível para colaborar em projetos Web</h5>
                        <p>
                            Nascido em 2001, sou um desenvolvedor de front-end apaixonado por transformar ideias em realidade digital. Com uma
                            mentalidade orientada para a excelência, estou comprometido em aprimorar minhas habilidades constantemente.
                        </p>
                        <div id={styles.linha}>
                            <div>
                                <span>20+</span>
                                <p>
                                    Projetos <br /> Completados.
                                </p>
                            </div>
                            <div>
                                <span>13</span>
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
                                    <i>
                                        <MdOutlineWorkHistory />
                                    </i>
                                </div>
                                <div id={styles.rightCard}>
                                    <span>2022 - Present</span>
                                    <h5>Web Freelancer - Workana</h5>
                                    <p>
                                        Como freelancer na Workana, ofereço serviços profissionais na área de desenvolvimento web com 1 ano de
                                        experiência principalmente em Wordpress(elementor). Trabalho com dedicação e comprometimento para atender
                                        a necessidade de cada cliente, buscando sempre a excelência no resultado final.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.cardXP}>
                                <div id={styles.leftCard}>
                                    <i>
                                        <MdOutlineWorkHistory />
                                    </i>
                                </div>
                                <div id={styles.rightCard}>
                                    <span>2022 - Present</span>
                                    <h5>Desenvolvedor FrontEnd - ANOVAFASE</h5>
                                    <p>
                                        Atual desenvolvedor front-end para uma equipe de marketing digital chamada "ANF", "A nova Fase". Eu
                                        construí muitas páginas diferentes, usei diferentes estratégias de interface do usuário/ux, para tornar
                                        as páginas de destino altamente conversíveis.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.cardXP}>
                                <div id={styles.leftCard}>
                                    <i>
                                        <MdOutlineWorkHistory />
                                    </i>
                                </div>
                                <div id={styles.rightCard}>
                                    <span>2022 - 2023</span>
                                    <h5>Desenvolvedor FrontEnd - Nosso ads</h5>
                                    <p>
                                        Fui responsável por construir um serviço de cartão de visitas personalizado utilizando o poderoso plugin
                                        Elementor do WordPress. Com habilidades de design e conhecimentos avançados do Elementor, criei layouts
                                        atrativos e funcionais que ajudaram nossos clientes a se destacarem no mundo digital. Tive a oportunidade
                                        de expandir minha expertise em marketing digital e gestão de tráfego por meio do Facebook Ads.
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
                                <a href="https://www.linkedin.com/in/renzi-fidele-4886151bb/" target="_blank">
                                    <AiFillLinkedin />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://github.com/renzi-fidele-frontend" target="_blank">
                                    <AiFillGithub />
                                    <span>Github</span>
                                </a>
                                <a href="mailto:renzifidele2001@gmail.com" target="_blank">
                                    <AiOutlineMail />
                                    <span>Mail</span>
                                </a>
                                <a href="https://wa.link/azvl93" target="_blank">
                                    <AiOutlineWhatsApp />
                                    <span>WhatsApp</span>
                                </a>
                                <a href={curiculo} target="_blank">
                                    <FaFilePdf />
                                    <span>Currículo</span>
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
                                        <div style={{ width: "40%" }}>
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Seção dos serviços*/}
            <section
                ref={secServicos}
                onMouseEnter={() => {
                    navegar("/#servicos");
                }}
                id={styles.servicos}
            >
                <h2 className={styles.titulo2}>
                    <span>Meus serviços</span>
                </h2>
                <div>
                    <div
                        className={styles.serviceBox}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.ServicoEntrou);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.ServicoEntrou);
                        }}
                    >
                        <div className={styles.iconContainer}>
                            <i className={styles.iconBox}>
                                <CgWebsite />
                            </i>
                        </div>
                        <div className={styles.conteudo}>
                            <h5>Criação de Landing Page</h5>
                            <p>Páginas otimizadas que convertem. Design atraente e focado em resultados.</p>
                        </div>
                    </div>

                    <div
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.ServicoEntrou);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.ServicoEntrou);
                        }}
                        className={styles.serviceBox}
                    >
                        <div className={styles.iconContainer}>
                            <i className={styles.iconBox}>
                                <BsGlobe />
                            </i>
                        </div>
                        <div className={styles.conteudo}>
                            <h5>Desenvolvimento Web</h5>
                            <p>Soluções web personalizadas para impulsionar seu negócio utilizando as melhores tecnologias do mercado.</p>
                        </div>
                    </div>

                    <div
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.ServicoEntrou);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.ServicoEntrou);
                        }}
                        className={styles.serviceBox}
                    >
                        <div className={styles.iconContainer}>
                            <i className={styles.iconBox}>
                                <MdOutlineDesignServices />
                            </i>
                        </div>
                        <div className={styles.conteudo}>
                            <h5>Web design</h5>
                            <p>Designs modernos e intuitivos que cativam e envolvem seu público para garantir conversão e confiança.</p>
                        </div>
                    </div>

                    <div
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.ServicoEntrou);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.ServicoEntrou);
                        }}
                        className={styles.serviceBox}
                    >
                        <div className={styles.iconContainer}>
                            <i className={styles.iconBox}>
                                <SiGoogleads />
                            </i>
                        </div>
                        <div className={styles.conteudo}>
                            <h5>Gestão de tráfego</h5>
                            <p>Aumente sua visibilidade e resultados com estratégias eficazes de marketing digital.</p>
                        </div>
                    </div>

                    <div
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.ServicoEntrou);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.ServicoEntrou);
                        }}
                        className={styles.serviceBox}
                    >
                        <div className={styles.iconContainer}>
                            <i className={styles.iconBox}>
                                <BiCopyAlt />
                            </i>
                        </div>
                        <div className={styles.conteudo}>
                            <h5>Copywriting</h5>
                            <p>Mensagens persuasivas que impactam seu público-alvo e impulsionam as conversões.</p>
                        </div>
                    </div>

                    <div
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.ServicoEntrou);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.ServicoEntrou);
                        }}
                        className={styles.serviceBox}
                    >
                        <div className={styles.iconContainer}>
                            <i className={styles.iconBox}>
                                <BiVideo />
                            </i>
                        </div>
                        <div className={styles.conteudo}>
                            <h5>Edição de vídeo</h5>
                            <p>Transforme suas ideias em vídeos cativantes e profissionais com efeitos impressionantes com o Filmora.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Seção do portifólio */}
            <section
                ref={secPortifolio}
                onMouseEnter={() => {
                    navegar("/#portifolio");
                }}
                id={styles.portifolio}
            >
                <h2 className={styles.titulo2}>
                    <span>Meu Portifólio</span>
                </h2>

                <div>
                    {/*Projeto 1 */}
                    <div
                        className={styles.portifolioCard}
                        ref={cardHover}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.cardHover);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.cardHover);
                        }}
                    >
                        <div className={styles.portifolioText}>
                            <h6>Nosso Blog: Blog de curiosidades</h6>
                            <p>ReactJs, Firebase, Css</p>
                            <a href="https://nossoblog.vercel.app/" target="_blank">
                                <ImNewTab />
                            </a>
                        </div>
                        <div id={styles.projeto1} className={styles.portifolioImg}>
                            <Link
                                state={{
                                    link: "https://films-lib.vercel.app/",
                                    titulo: "Nosso Blog: Blog de curiosidades",
                                    plataforma: "Vercel",
                                    linguagens: "ReactJs, Firebase, Css",
                                    tipo: "Website",
                                    pais: "Moçambique",
                                    imagem: video1,
                                }}
                                to={"#projecto1"}
                            >
                                <BsPlusCircle />
                            </Link>
                            <ProjectModal />
                        </div>
                    </div>
                    {/*Projeto 2 */}
                    <div
                        className={styles.portifolioCard}
                        ref={cardHover}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.cardHover);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.cardHover);
                        }}
                    >
                        <div className={styles.portifolioText}>
                            <h6>Custos: Gerenciador de projetos</h6>
                            <p>ReactJs, Firebase, Css</p>
                            <a href="https://custos-five.vercel.app/" target="_blank">
                                <ImNewTab />
                            </a>
                        </div>
                        <div id={styles.projeto2} className={styles.portifolioImg}>
                            <Link
                                state={{
                                    link: "https://custos-five.vercel.app/",
                                    titulo: "Custos: Gerenciador de projetos",
                                    plataforma: "Vercel",
                                    linguagens: "ReactJs, Firebase, Css",
                                    tipo: "Website",
                                    pais: "Moçambique",
                                    imagem: video2,
                                }}
                                to={"#projecto2"}
                            >
                                <BsPlusCircle />
                            </Link>
                        </div>
                    </div>
                    {/*Projeto 3 */}
                    <div
                        className={styles.portifolioCard}
                        ref={cardHover}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.cardHover);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.cardHover);
                        }}
                    >
                        <div className={styles.portifolioText}>
                            <h6>FilmesLib: Biblioteca de filmes</h6>
                            <p>ReactJs, Css</p>
                            <a href="https://films-lib.vercel.app/" target="_blank">
                                <ImNewTab />
                            </a>
                        </div>
                        <div id={styles.projeto3} className={styles.portifolioImg}>
                            <Link
                                state={{
                                    link: "https://films-lib.vercel.app/",
                                    titulo: "FilmesLib: Biblioteca de filmes",
                                    plataforma: "Vercel",
                                    linguagens: "ReactJs, Css",
                                    tipo: "Website",
                                    pais: "Moçambique",
                                    imagem: video3,
                                }}
                                to={"#projecto3"}
                            >
                                <BsPlusCircle />
                            </Link>
                        </div>
                    </div>
                    {/*Projeto 4 */}
                    <div
                        className={styles.portifolioCard}
                        ref={cardHover}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.cardHover);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.cardHover);
                        }}
                    >
                        <div className={styles.portifolioText}>
                            <h6>LP para Ebook digital - O método correto</h6>
                            <p>WP, Elementor, JavaScript</p>
                            <a href="https://ometodocorreto.com/" target="_blank">
                                <ImNewTab />
                            </a>
                        </div>
                        <div id={styles.projeto4} className={styles.portifolioImg}>
                            <Link
                                state={{
                                    link: "https://ometodocorreto.com/",
                                    titulo: "LP para Ebook digital - O método correto",
                                    plataforma: "Wordpress",
                                    linguagens: "WP, Elementor, JavaScript",
                                    tipo: "Landing Page",
                                    pais: "Brasil",

                                    img: demo4,
                                }}
                                to={"#projecto4"}
                            >
                                <BsPlusCircle />
                            </Link>
                        </div>
                    </div>
                    {/*Projeto 5 */}
                    <div
                        className={styles.portifolioCard}
                        ref={cardHover}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.cardHover);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.cardHover);
                        }}
                    >
                        <div className={styles.portifolioText}>
                            <h6>LP para construtora Unity Carlessi</h6>
                            <p>WP, Elementor, Javascript</p>
                            <a href="https://unitycarlessi.com.br/" target="_blank">
                                <ImNewTab />
                            </a>
                        </div>
                        <div id={styles.projeto5} className={styles.portifolioImg}>
                            <Link
                                state={{
                                    link: "https://unitycarlessi.com.br/",
                                    titulo: "LP para construtora Unity Carlessi",
                                    plataforma: "Wordpress",
                                    linguagens: "WP, Elementor, JavaScript",
                                    tipo: "Landing Page",
                                    pais: "Brasil",
                                    img: demo5,
                                }}
                                to={"#projecto5"}
                            >
                                <BsPlusCircle />
                            </Link>
                        </div>
                    </div>
                    {/*Projeto 6 */}
                    <div
                        className={styles.portifolioCard}
                        ref={cardHover}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.toggle(styles.cardHover);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove(styles.cardHover);
                        }}
                    >
                        <div className={styles.portifolioText}>
                            <h6>Lp para Ebook digital - Panetones artesanais</h6>
                            <p>WP, Elementor, Javascript</p>
                            <a href="https://anovafase.com/panetones-artesanais/" target="_blank">
                                <ImNewTab />
                            </a>
                        </div>
                        <div id={styles.projeto6} className={styles.portifolioImg}>
                            <Link
                                state={{
                                    link: "https://anovafase.com/panetones-artesanais/",
                                    titulo: "Lp para Ebook digital - Panetones artesanais",
                                    plataforma: "Wordpress",
                                    linguagens: "WP, Elementor, JavaScript",
                                    tipo: "Landing Page",
                                    pais: "Brasil",
                                    img: demo6,
                                }}
                                to={"#projecto6"}
                            >
                                <BsPlusCircle />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/*Seção dos testemunhos */}
            <div
                ref={secTestemunhos}
                onMouseEnter={() => {
                    navegar("/#testemunhos");
                }}
                id={styles.testemunhos}
            >
                <h2 className={styles.titulo2}>
                    <span>Testemunhos</span>
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    className={styles.swipperContainer}
                    speed={500}
                    spaceBetween={20}
                    autoplay={true}
                    pagination={{ type: "bullets", el: `.${styles.pag}`, clickable: true }}
                    slidesPerView={"auto"}
                    breakpoints={{ 1024: { slidesPerView: 2 }, 1200: { slidesPerView: 4, spaceBetween: 25 }, 1663: { slidesPerView: 3 } }}
                >
                    <div>
                        <SwiperSlide>
                            <div className={styles.testemunhoCard}>
                                <div id={styles.avatar}>
                                    <img src={avatar1} alt="" />
                                </div>
                                <div id={styles.historia}>
                                    <h5>Professional de excelente qualidade</h5>
                                    <p>Eu considero o Renzi muito proativo e super talentoso, cuidou do meu problema num instante</p>
                                    <div>
                                        <p>Amanda Caleiras</p>
                                        <span>Ceo na ANOVAFASE</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.testemunhoCard}>
                                <div id={styles.avatar}>
                                    <img src={avatar1} alt="" />
                                </div>
                                <div id={styles.historia}>
                                    <h5>Professional de excelente qualidade</h5>
                                    <p>Eu considero o Renzi muito proativo e super talentoso, cuidou do meu problema num instante</p>
                                    <div>
                                        <p>Amanda Caleiras</p>
                                        <span>Ceo na ANOVAFASE</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.testemunhoCard}>
                                <div id={styles.avatar}>
                                    <img src={avatar1} alt="" />
                                </div>
                                <div id={styles.historia}>
                                    <h5>Professional de excelente qualidade</h5>
                                    <p>Eu considero o Renzi muito proativo e super talentoso, cuidou do meu problema num instante</p>
                                    <div>
                                        <p>Amanda Caleiras</p>
                                        <span>Ceo na ANOVAFASE</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.testemunhoCard}>
                                <div id={styles.avatar}>
                                    <img src={avatar1} alt="" />
                                </div>
                                <div id={styles.historia}>
                                    <h5>Professional de excelente qualidade</h5>
                                    <p>Eu considero o Renzi muito proativo e super talentoso, cuidou do meu problema num instante</p>
                                    <div>
                                        <p>Amanda Caleiras</p>
                                        <span>Ceo na ANOVAFASE</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className={styles.pag}></div>
                </Swiper>
            </div>

            {/*Seção dos Contactos */}
            <section
                ref={secContacto}
                onMouseEnter={() => {
                    navegar("/#contacto");
                }}
                id={styles.contacto}
            >
                <div id={styles.left}>
                    <h3>Vamos discutir acerca do seu projecto</h3>
                    <div id={styles.iconsCont}>
                        <div>
                            <div id={styles.left}>
                                <i>
                                    <BiSolidMessageAltDetail />
                                </i>
                            </div>
                            <div id={styles.right}>
                                <h5>Converse comigo</h5>
                                <p>Estou aqui para te ajudar.</p>
                                <span>renzifidele2001@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <div id={styles.left}>
                                <i>
                                    <ImLocation2 />
                                </i>
                            </div>
                            <div id={styles.right}>
                                <h5>Encontre-me</h5>
                                <p>Venha dizer Hello em meu escritório.</p>
                                <span>Maputo, Moçambique</span>
                            </div>
                        </div>
                        <div>
                            <div id={styles.left}>
                                <i>
                                    <BiSolidPhoneCall />
                                </i>
                            </div>
                            <div id={styles.right}>
                                <h5>Ligue pra mim</h5>
                                <p>Disponível a qualquer momento.</p>
                                <span>+258 85 6261 526</span>
                            </div>
                        </div>
                    </div>
                    <div id={styles.locationCont}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d557.9820380597123!2d32.54581336066112!3d-25.876657213551134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-PT!2smz!4v1688428470244!5m2!1spt-PT!2smz"
                            width="100%"
                            height="215"
                            style={{ border: 0, borderRadius: "8px" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div id={styles.right}>
                    <h6>
                        Alguma idéia? Eu tenho a skill.
                        <br />
                        Vamos nos unir.
                    </h6>
                    <p>Me conte um pouco sobre você o que tens em mente.</p>
                    <form>
                        <fieldset id={styles.fieldNome}>
                            <label htmlFor="">Primeiro nome</label>
                            <input type="text" placeholder="Nome * " />
                        </fieldset>
                        <fieldset id={styles.fieldEmail}>
                            <label htmlFor="">Seu Email</label>
                            <input type="text" placeholder="Email *" />
                        </fieldset>
                        <fieldset id={styles.fieldAssunto}>
                            <label htmlFor="">Assunto</label>
                            <input type="text" placeholder="Assunto *" />
                        </fieldset>
                        <fieldset id={styles.fieldMensagem}>
                            <label htmlFor="">Sua mensagem</label>
                            <textarea placeholder="Mensagem *" />
                        </fieldset>
                        <button>Enviar mensagem</button>
                    </form>
                </div>
            </section>

            {/*Secao do Footer */}
            <footer id={styles.footer}>
                <div>
                    <div>
                        <a href="https://www.linkedin.com/in/renzi-fidele-4886151bb/" target="_blank">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://www.instagram.com/thats.renzy/" target="_blank">
                            <AiFillInstagram />
                        </a>
                        <a href="https://web.facebook.com/renzy00/" target="_blank">
                            <AiFillFacebook />
                        </a>
                        <a href="https://wa.link/azvl93" target="_blank">
                            <AiOutlineWhatsApp />
                        </a>
                    </div>
                    <span>© 2023 copyright - Todos os direitos reservados</span>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
