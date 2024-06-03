import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useSubir() {
   const location = useLocation();

   // TODO: Corrigir problema do scroll ao topo, caso seja alterada de página

   useEffect(() => {
      if (location.pathname === "/portfolio") {
         console.log("Scroll feito para o top com sucesso!");
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
      }
   }, [location.pathname]);

   return () => {};
}

export default useSubir;
