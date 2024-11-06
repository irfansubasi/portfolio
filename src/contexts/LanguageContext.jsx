import { createContext, useContext, useEffect } from 'react';
import { translations } from '../data/data';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'tr');

  useEffect(() => {
    axios
      .get('https://reqres.in/api/workintech')
      .then((res) => {
        console.log('data GET successfully!', res.data);
      })
      .catch((err) => {
        console.error('data get failed!', err);
      });
  }, []);

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
