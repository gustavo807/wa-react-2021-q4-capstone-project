import { createContext, useState } from "react";

const LangContext = createContext();

const initialState = "en-us";

export const LangState = ({ children }) => {
  const [lang, setLang] = useState(initialState);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
