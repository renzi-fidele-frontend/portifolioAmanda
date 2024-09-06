import { Suspense, useState } from "react";
import LeftNav from "./Components/LeftNav/LeftNav";
import "./App.css";
import { NavProvider } from "./Context/NavContext";
import { Outlet } from "react-router-dom";

function App() {
   const [nav, setNav] = useState(false);

   // TODO: Adicionar modo de idiomas em PT / EN

   return (
      <NavProvider value={{ nav, setNav }}>
         <Suspense fallback={<p>Loading...</p>}>
            <div id="App">
               <LeftNav />
               <Outlet />
            </div>
         </Suspense>
      </NavProvider>
   );
}

export default App;
