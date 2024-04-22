import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollTop({ divRef }) {
   const location = useLocation();

   useEffect(() => {
      divRef?.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }, [divRef]);
}

export default useScrollTop;
