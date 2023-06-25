import React from "react";
import styles from "./LeftNav.module.css";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
    return (
        <div id={styles.container}>
            <NavLink to="#home">Logo</NavLink>
            <div id={styles.nav}>
                <ul>
                    <li>
                        <img src="" alt="icone de navegacao" />
                    </li>
                    <li>
                        <img src="" alt="icone de navegacao" />
                    </li>
                    <li>
                        <img src="" alt="icone de navegacao" />
                    </li>
                    <li>
                        <img src="" alt="icone de navegacao" />
                    </li>
                    <li>
                        <img src="" alt="icone de navegacao" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftNav;
