import { useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import TestemunhoCard from "../../Components/TestemunhoCard/TestemunhoCard";
import ServicoCard from "../../Components/ServicoCard/ServicoCard";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile";

import me from "../../Images/AmandaCaleiras.jpg";
import crazy from "../../Images/AmandaCaleiras3.jpg";
import logo from "../../Images/lg.png";

//  Icons
import { FaPlus } from "react-icons/fa";
import { MdOutlineWorkHistory, MdWorkOutline } from "react-icons/md";

//  Typewriter
import Typewriter from "typewriter-effect";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";
import useData from "./useData";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const MainPage = () => {
   const { t } = useTranslation();

   const { portfolioInstitucional, portfolioLandingPage, portfolioReact, servicos, testemunhos } = useData();

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
         <HeaderMobile
            onLogoClick={() => {
               secinicio.current.scrollIntoView({ behavior: "smooth" });
            }}
         />

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
                  <img id={styles.me} src={me} alt={t("sections.inicio.altImg")} />
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
                  <h6>👋 {t("sections.inicio.greet")}</h6>
                  <h1>Amanda Caleiras</h1>
                  <h4>
                     {t("sections.inicio.im")}
                     <Typewriter
                        options={{
                           strings: [t("sections.inicio.typewriter.0"), t("sections.inicio.typewriter.1"), t("sections.inicio.typewriter.2")],
                           autoStart: true,
                           loop: true,
                           delay: 75,
                           wrapperClassName: styles.textoDinamico,
                        }}
                     />
                  </h4>
                  <p>{t("sections.inicio.bio")}</p>

                  <a
                     className={styles.botao}
                     href="https://www.workana.com/freelancer/4b3e7a32256b93024c653db2d86a8dfe"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <MdWorkOutline /> {t("sections.inicio.cta")}
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
                     <span>{t("sections.sobre.h2")}</span>
                  </h2>
                  <h6>{t("sections.sobre.h6")}</h6>
                  <h5>{t("sections.sobre.h5")}</h5>
                  <p>{t("sections.sobre.p")}</p>
                  <div id={styles.linha}>
                     <div>
                        <span>20+</span>
                        <p>
                           {t("sections.sobre.projects.0")} <br /> {t("sections.sobre.projects.1")}.
                        </p>
                     </div>
                     <div>
                        <span>13</span>
                        <p>
                           {t("sections.sobre.clients.0")} <br /> {t("sections.sobre.clients.1")}.
                        </p>
                     </div>
                  </div>
               </div>
               <div id={styles.secaoXP}>
                  <h2 className={styles.titulo1}>{t("sections.sobre.xp")}</h2>
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
                           <p>{t("sections.sobre.xpInfo.0")}</p>
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
                           <h5>Frontend Developer - ANOVAFASE</h5>
                           <p>{t("sections.sobre.xpInfo.1")}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id={styles.right}>
               <div ref={skillsRef}>
                  <div className={styles.duasCol}>
                     <img src={crazy} alt={t("sections.sobre.altPic")} />
                  </div>
                  <div id={styles.skills}>
                     <h2 className={styles.titulo1}>{t("sections.sobre.skills")}</h2>
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
               <span>{t("sections.services.tit")}</span>
            </h2>

            <div id={styles.grelha}>
               {servicos.map((v, k) => (
                  <ServicoCard descricao={v.descricao} icone={v.icone} titulo={v.titulo} key={k} />
               ))}
            </div>

            <div className={styles.swiperMobileCt}>
               <Swiper
                  modules={[Pagination]}
                  className={styles.swipperContainer}
                  speed={500}
                  spaceBetween={20}
                  pagination={{ type: "bullets", el: `.${styles.pag}`, clickable: true }}
                  slidesPerView={"auto"}
                  breakpoints={{ 950: { slidesPerView: 2 }, 1550: { slidesPerView: 3 } }}
               >
                  {servicos.map((v, k) => (
                     <SwiperSlide key={k}>
                        <ServicoCard descricao={v.descricao} icone={v.icone} titulo={v.titulo} />
                     </SwiperSlide>
                  ))}

                  <div className={styles.pag}></div>
               </Swiper>
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
               <span>{t("sections.portfolio.tit")}</span>
            </h2>
            <Tabs>
               <TabList>
                  <Tab>Landing Page</Tab>
                  <Tab>Institucional</Tab>
                  <Tab>ReactJs</Tab>
               </TabList>
               <TabPanel>
                  {/*  Desktop  */}
                  <div id={styles.grelha}>
                     {portfolioLandingPage.map(
                        (v, k) =>
                           k < 6 && (
                              <ProjectCard
                                 titulo={v.titulo}
                                 urlProjeto={v.url}
                                 plataforma={v.plataforma}
                                 linguagens={v.linguagens}
                                 tipo={v.tipo}
                                 repositorio={v.repositorio}
                                 imagemDestaque={v.imagemDestaque}
                                 videoDestaque={v.videoDestaque}
                                 imagemThumbnail={v.imagemThumbnail}
                                 key={k}
                                 thumbnailCentralizado={v.fotoCentralizada}
                              />
                           )
                     )}
                  </div>
                  {/*  Mobile  */}
                  <div className={styles.swiperMobileCt}>
                     <Swiper
                        modules={[Pagination]}
                        className={styles.swipperContainer}
                        speed={500}
                        spaceBetween={20}
                        pagination={{ type: "bullets", el: `.${styles.pag}`, clickable: true }}
                        slidesPerView={"auto"}
                        breakpoints={{ 950: { slidesPerView: 2 }, 1550: { slidesPerView: 3 } }}
                     >
                        {portfolioLandingPage.map(
                           (v, k) =>
                              k < 6 && (
                                 <SwiperSlide key={k}>
                                    <ProjectCard
                                       titulo={v.titulo}
                                       urlProjeto={v.url}
                                       plataforma={v.plataforma}
                                       linguagens={v.linguagens}
                                       tipo={v.tipo}
                                       repositorio={v.repositorio}
                                       imagemDestaque={v.imagemDestaque}
                                       videoDestaque={v.videoDestaque}
                                       imagemThumbnail={v.imagemThumbnail}
                                       thumbnailCentralizado={v.fotoCentralizada}
                                    />
                                 </SwiperSlide>
                              )
                        )}

                        <div className={styles.pag}></div>
                     </Swiper>
                  </div>
               </TabPanel>
               <TabPanel>
                  {/*  Desktop  */}
                  <div id={styles.grelha}>
                     {portfolioInstitucional.map(
                        (v, k) =>
                           k < 6 && (
                              <ProjectCard
                                 titulo={v.titulo}
                                 urlProjeto={v.url}
                                 plataforma={v.plataforma}
                                 linguagens={v.linguagens}
                                 tipo={v.tipo}
                                 repositorio={v.repositorio}
                                 imagemDestaque={v.imagemDestaque}
                                 videoDestaque={v.videoDestaque}
                                 imagemThumbnail={v.imagemThumbnail}
                                 key={k}
                                 thumbnailCentralizado={v.fotoCentralizada}
                              />
                           )
                     )}
                  </div>
                  {/*  Mobile  */}
                  <div className={styles.swiperMobileCt}>
                     <Swiper
                        modules={[Pagination]}
                        className={styles.swipperContainer}
                        speed={500}
                        spaceBetween={20}
                        pagination={{ type: "bullets", el: `.${styles.pag}`, clickable: true }}
                        slidesPerView={"auto"}
                        breakpoints={{ 950: { slidesPerView: 2 }, 1550: { slidesPerView: 3 } }}
                     >
                        {portfolioInstitucional.map(
                           (v, k) =>
                              k < 6 && (
                                 <SwiperSlide key={k}>
                                    <ProjectCard
                                       titulo={v.titulo}
                                       urlProjeto={v.url}
                                       plataforma={v.plataforma}
                                       linguagens={v.linguagens}
                                       tipo={v.tipo}
                                       repositorio={v.repositorio}
                                       imagemDestaque={v.imagemDestaque}
                                       videoDestaque={v.videoDestaque}
                                       imagemThumbnail={v.imagemThumbnail}
                                       thumbnailCentralizado={v.fotoCentralizada}
                                    />
                                 </SwiperSlide>
                              )
                        )}

                        <div className={styles.pag}></div>
                     </Swiper>
                  </div>
               </TabPanel>
               <TabPanel>
                  {/*  Desktop  */}
                  <div id={styles.grelha}>
                     {portfolioReact.map(
                        (v, k) =>
                           k < 6 && (
                              <ProjectCard
                                 titulo={v.titulo}
                                 urlProjeto={v.url}
                                 plataforma={v.plataforma}
                                 linguagens={v.linguagens}
                                 tipo={v.tipo}
                                 repositorio={v.repositorio}
                                 imagemDestaque={v.imagemDestaque}
                                 videoDestaque={v.videoDestaque}
                                 imagemThumbnail={v.imagemThumbnail}
                                 key={k}
                                 thumbnailCentralizado={v.fotoCentralizada}
                              />
                           )
                     )}
                  </div>
                  {/*  Mobile  */}
                  <div className={styles.swiperMobileCt}>
                     <Swiper
                        modules={[Pagination]}
                        className={styles.swipperContainer}
                        speed={500}
                        spaceBetween={20}
                        pagination={{ type: "bullets", el: `.${styles.pag}`, clickable: true }}
                        slidesPerView={"auto"}
                        breakpoints={{ 950: { slidesPerView: 2 }, 1550: { slidesPerView: 3 } }}
                     >
                        {portfolioReact.map(
                           (v, k) =>
                              k < 6 && (
                                 <SwiperSlide key={k}>
                                    <ProjectCard
                                       titulo={v.titulo}
                                       urlProjeto={v.url}
                                       plataforma={v.plataforma}
                                       linguagens={v.linguagens}
                                       tipo={v.tipo}
                                       repositorio={v.repositorio}
                                       imagemDestaque={v.imagemDestaque}
                                       videoDestaque={v.videoDestaque}
                                       imagemThumbnail={v.imagemThumbnail}
                                       thumbnailCentralizado={v.fotoCentralizada}
                                    />
                                 </SwiperSlide>
                              )
                        )}

                        <div className={styles.pag}></div>
                     </Swiper>
                  </div>
               </TabPanel>
            </Tabs>

            {/* Modal do projeto individual */}
            <ProjectModal />
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
               <span>{t("sections.testemunhos.tit")}</span>
            </h2>

            <Swiper
               modules={[Autoplay, Pagination]}
               className={styles.swipperContainer}
               speed={500}
               spaceBetween={20}
               autoplay={true}
               pagination={{ type: "bullets", el: `.${styles.pag}`, clickable: true }}
               slidesPerView={"auto"}
               breakpoints={{ 950: { slidesPerView: 2 }, 1550: { slidesPerView: 3 } }}
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

         {/*Secao do Footer */}
         <footer id={styles.footer}>
            <div>
               <div>
                  <img src={logo} alt="" />
               </div>
               <span>© 2023 copyright - {t("sections.footer.span")}</span>
            </div>
         </footer>
      </div>
   );
};

export default MainPage;
