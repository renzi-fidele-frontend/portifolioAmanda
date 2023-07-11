import { useContext } from "react";
import { createContext } from "react";

//  Criando o contexto global
export const NavContext = createContext();

//  Exportando o provedor de contexto para colocar no componente pai
export function NavProvider({ children, value }) {
    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function NavValue() {
    return useContext(NavContext);
}
