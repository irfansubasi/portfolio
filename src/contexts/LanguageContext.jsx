import { createContext, useContext, useState } from 'react';
import { translations } from '../data/data';

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const switchLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  return useContext(LanguageContext);
};
