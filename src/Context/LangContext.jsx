import { createContext, useContext } from "react";

export const LangContext = createContext();

export function LangProvider({ children, value }) {
   return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function LangValue() {
   return useContext(LangContext);
}
