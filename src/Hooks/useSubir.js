import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useSubir() {
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === "/portfolio") {
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
      }
   }, [location.pathname]);

   return () => {};
}

export default useSubir;
