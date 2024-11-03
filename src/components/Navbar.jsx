import { useState } from 'react';
import moonIcon from '../assets/icons/moon.svg';
import sunIcon from '../assets/icons/sun.svg';
import { useLanguage } from '../contexts/LanguageContext';
import pfp from '../assets/images/pfp.png';
import Button from './Button';

export default function Navbar() {
  const [isOn, setIsOn] = useState(true);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  const { language, switchLanguage, translations } = useLanguage();

  return (
    <>
      <header className="container mx-auto">
        <div className="navs flex items-end flex-col py-4">
          <nav className="flex items-center gap-x-4 text-xs font-bold text-textColor">
            <div className="mode-group flex items-center gap-x-2">
              <button
                onClick={toggleButton}
                className={`w-16 h-6 rounded-full p-1 transition-colors duration-300 bg-buttonColor`}
              >
                <div
                  className={`w-6 h-2 bg-transparent rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    isOn ? 'translate-x-8' : 'translate-x-0'
                  }`}
                >
                  {isOn ? (
                    <img src={sunIcon} alt="Sun Icon" className="w-5 h-4" />
                  ) : (
                    <img src={moonIcon} alt="Moon Icon" className="w-5 h-4" />
                  )}
                </div>
              </button>
              <p>{translations[language].nav.mode.toUpperCase()}</p>
            </div>
            <span>|</span>
            <div className="switch-group flex items-center">
              {language === 'tr' ? (
                <>
                  <p>{translations[language].nav.lang.lang1.toUpperCase()}</p>
                  <button
                    className="text-buttonColor ml-1"
                    onClick={() => switchLanguage()}
                  >
                    {translations[language].nav.lang.lang2.toUpperCase()}
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="text-buttonColor"
                    onClick={() => switchLanguage()}
                  >
                    {translations[language].nav.lang.lang1.toUpperCase()}
                  </button>
                  <p>{translations[language].nav.lang.lang2.toUpperCase()}</p>
                </>
              )}
            </div>
          </nav>
          <div className="nav-group flex items-center justify-between w-full">
            <img src={pfp} alt="pfp" className="w-12" />
            <nav className="text-textColor font-medium flex items-center gap-x-16">
              <a href="#">{translations[language].nav.skills}</a>
              <a href="#">{translations[language].nav.projects}</a>
              <Button text={translations[language].nav.hire} />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
