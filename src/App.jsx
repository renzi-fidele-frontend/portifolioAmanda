import { useState } from "react";
import "./App.css";
import LeftNav from "./Components/LeftNav/LeftNav";
import styles from "./App.css"
import MainPage from "./Pages/MainPage/MainPage";

function App() {
    return (
        <div id="App">
            <LeftNav />
            <MainPage/>
        </div>
    );
}

export default App;
