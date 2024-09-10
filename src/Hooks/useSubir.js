import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useSubir() {
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === "/portfolio") {
         console.log("Scroll feito para o top com sucesso!");
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
      }
   }, [location.pathname]);
}

export default useSubir;
