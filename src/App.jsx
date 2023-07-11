import { useState } from "react";
import LeftNav from "./Components/LeftNav/LeftNav";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { NavProvider } from "./Context/NavContext";

function App() {
    const [nav, setNav] = useState(false)

    return (
        <NavProvider value={{nav, setNav}}>
            <div id="App">
                <LeftNav />
                <MainPage />
            </div>
        </NavProvider>
    );
}

export default App;
