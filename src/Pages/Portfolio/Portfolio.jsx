import React, { useRef } from "react";
import styles from "./Portfolio.module.css";
import estiloMain from "../MainPage/MainPage.module.css";
import { portfolio } from "../MainPage/data";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile";
import { useNavigate } from "react-router-dom";
import useScrollTop from "../../Hooks/useScrollTop";

const Portfolio = () => {
   const navegar = useNavigate();
   const ctRef = useRef();
   const scrolltop = useScrollTop({ divRef: ctRef.current });

   return (
      <div ref={ctRef} id={estiloMain.portifolio}>
         <HeaderMobile onLogoClick={() => navegar("/")} />

         <h2 className={estiloMain.titulo2}>
            <span>Veja todo o meu portfólio</span>
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
         </div>

         {/* Modal do projeto individual */}
         <ProjectModal />
      </div>
   );
};

export default Portfolio;
