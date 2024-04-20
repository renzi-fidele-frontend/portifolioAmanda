import React from "react";
import styles from "./Portfolio.module.css";
import estiloMain from "../MainPage/MainPage.module.css";
import { portfolio } from "../MainPage/data";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Portfolio = () => {
   return (
      <div id={estiloMain.portifolio}>
         <h2 className={estiloMain.titulo2}>
            <span>Veja todo o meu trabalho feito</span>
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
      </div>
   );
};

export default Portfolio;
