import { useState } from "react";
import LeftNav from "./Components/LeftNav/LeftNav";
import "./App.css";
import { NavProvider } from "./Context/NavContext";
import { Outlet } from "react-router-dom";
import useSubir from "./Hooks/useSubir";

function App() {
   const [nav, setNav] = useState(false);
   const subir = useSubir()

   return (
      <NavProvider value={{ nav, setNav }}>
         <div id="App">
            <LeftNav />
            <Outlet />
         </div>
      </NavProvider>
   );
}

export default App;
