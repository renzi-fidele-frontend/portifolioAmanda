import React, { useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";

import me from "../../Images/me1.gif";
import crazy from "../../Images/meReal.gif";
import logo from "../../Images/lg.png";
import curiculo from "../../../src/Images/Renzi_Fidele.pdf";

//  Icons
import { BiSolidMessageAltDetail, BiSolidPhoneCall } from "react-icons/bi";
import { FaBars, FaFilePdf } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BsDownload } from "react-icons/bs";
import { AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { MdOutlineWorkHistory } from "react-icons/md";

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

import emailjs from "@emailjs/browser";
import { portfolio, servicos, testemunhos } from "./data";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import TestemunhoCard from "../../Components/TestemunhoCard/TestemunhoCard";
import ServicoCard from "../../Components/ServicoCard/ServicoCard";

const MainPage = () => {
   const skillsRef = useRef();

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

   const formRef = useRef();

   //  Enviar mensagem para email
   async function sendMessage(e) {
      e.preventDefault();
      emailjs
         .sendForm("service_ru19i6o", "template_x79mlbg", formRef.current, "psXngkmWfHJgvC3ju")
         .then(
            (result) => {
               alert("Email enviado com sucesso");
            },
            (error) => {
               alert(`Ops, erro ao enviar email`);
            }
         )
         .catch((err) => {
            console.log(`Ops, houve erro: ${err}, ao enviar a msg do form`);
         });
   }

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
               onClick={() => {
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
                     Posso criar um site do nada, totalmente formado. Eu não uso truques, nem isso é mágica. Eu me especializei em manipular a
                     própria estrutura da web, suas matérias-primas de HTML, CSS, JavaScript e ReactJs.{" "}
                  </p>

                  <a href={curiculo} download={"Renzi Fidele.pdf"} target="_blank">
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
                              Como freelancer na Workana, ofereço serviços profissionais na área de desenvolvimento web com 1 ano de experiência
                              principalmente em Wordpress(elementor). Trabalho com dedicação e comprometimento para atender a necessidade de cada
                              cliente, buscando sempre a excelência no resultado final.
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
                              Atual desenvolvedor front-end para uma equipe de marketing digital chamada "ANF", "A nova Fase". Eu construí muitas
                              páginas diferentes, usei diferentes estratégias de interface do usuário/ux, para tornar as páginas de destino
                              altamente conversíveis.
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
                              Fui responsável por construir um serviço de cartão de visitas personalizado utilizando o poderoso plugin Elementor
                              do WordPress. Com habilidades de design e conhecimentos avançados do Elementor, criei layouts atrativos e
                              funcionais que ajudaram nossos clientes a se destacarem no mundo digital. Tive a oportunidade de expandir minha
                              expertise em marketing digital e gestão de tráfego por meio do Facebook Ads.
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
                        <a href={curiculo} target="_blank" download={"Renzi Fidele.pdf"}>
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
               {servicos.map((v, k) => (
                  <ServicoCard descricao={v.descricao} icone={v.icone} titulo={v.titulo} key={k} />
               ))}
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
               {portfolio.map((v, k) => (
                  <ProjectCard
                     titulo={v.titulo}
                     urlProjeto={v.url}
                     plataforma={v.plataforma}
                     linguagens={v.linguagens}
                     tipo={v.tipo}
                     pais={v.pais}
                     imagemDestaque={v.imagemDestaque}
                     videoDestaque={v.videoDestaque}
                     imagemThumbnail={v.imagemThumbnail}
                     key={k}
                     thumbnailCentralizado={v.fotoCentralizada}
                  />
               ))}

               {/* Modal do projeto individual */}
               <ProjectModal />
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
                  {testemunhos.map((v, k) => (
                     <SwiperSlide key={k}>
                        <TestemunhoCard
                           fotoCliente={v.fotoCliente}
                           nomeCliente={v.nomeCliente}
                           profissaoCliente={v.profissaoCliente}
                           testemunho={v.testemunho}
                           topico={v.topico}
                        />
                     </SwiperSlide>
                  ))}
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
               <form ref={formRef}>
                  <fieldset id={styles.fieldNome}>
                     <label htmlFor="">Primeiro nome</label>
                     <input type="text" name="nome" placeholder="Nome * " />
                  </fieldset>
                  <fieldset id={styles.fieldEmail}>
                     <label htmlFor="">Seu Email</label>
                     <input type="text" name="email" placeholder="Email *" />
                  </fieldset>
                  <fieldset id={styles.fieldAssunto}>
                     <label htmlFor="">Assunto</label>
                     <input type="text" name="assunto" placeholder="Assunto *" />
                  </fieldset>
                  <fieldset id={styles.fieldMensagem}>
                     <label htmlFor="">Sua mensagem</label>
                     <textarea name="mensagem" placeholder="Mensagem *" />
                  </fieldset>
                  <button onClick={sendMessage}>Enviar mensagem</button>
               </form>
            </div>
         </section>

         {/*Secao do Footer */}
         <footer id={styles.footer}>
            <div>
               <div>
                  <a rel="noreferrer" href="https://www.linkedin.com/in/renzi-fidele-4886151bb/" target="_blank">
                     <AiFillLinkedin />
                  </a>
                  <a rel="noreferrer" href="https://www.instagram.com/thats.renzy/" target="_blank">
                     <AiFillInstagram />
                  </a>
                  <a rel="noreferrer" href="https://web.facebook.com/renzy00/" target="_blank">
                     <AiFillFacebook />
                  </a>
                  <a rel="noreferrer" href="https://wa.link/azvl93" target="_blank">
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
