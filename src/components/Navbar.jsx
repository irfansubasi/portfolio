import { useState } from 'react';
import moonIcon from '../assets/icons/moon.svg';
import sunIcon from '../assets/icons/sun.svg';
import { useLanguage } from '../contexts/LanguageContext';
import pfp from '../assets/images/pfp.png';
import Button from './Button';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, switchLanguage, translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="container mx-auto px-6 lg:px-24">
      <div className="modes flex justify-end">
        <nav className="navs py-4 ml-auto">
          <div className="hidden lg:flex items-center gap-x-4 text-xs font-bold text-textColor">
            <div className="mode-group flex items-center gap-x-2">
              <button
                onClick={toggleDarkMode}
                className="w-16 h-6 rounded-full p-1 transition-colors duration-300 bg-buttonColor"
              >
                <div
                  className={`w-6 h-2 bg-transparent rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    darkMode ? 'translate-x-8' : 'translate-x-0'
                  }`}
                >
                  {darkMode ? (
                    <img src={moonIcon} alt="Moon Icon" className="w-5 h-4" />
                  ) : (
                    <img src={sunIcon} alt="Sun Icon" className="w-5 h-4" />
                  )}
                </div>
              </button>
              <p>
                {darkMode
                  ? translations[language].nav.mode2.toUpperCase()
                  : translations[language].nav.mode.toUpperCase()}
              </p>
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
          </div>
        </nav>
      </div>
      <div className="flex items-center justify-between py-4">
        <img src={pfp} alt="pfp" className="w-12" />

        {/* Mobil Hamburger İkonu */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? (
            <FiX className="w-6 h-6 stroke-textColor" />
          ) : (
            <FiMenu className="w-6 stroke-textColor h-6" />
          )}
        </button>

        {/* Masaüstü için Navbar Menüsü */}
        <div className="hidden lg:flex items-center gap-x-16">
          <a className="text-textColor" href="#skills">
            {translations[language].nav.skills}
          </a>
          <a className="text-textColor" href="#projects">
            {translations[language].nav.projects}
          </a>
          <Button
            link={translations[language].nav.hireLink}
            text={translations[language].nav.hire}
          />
        </div>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-y-4 py-4 lg:hidden">
          <a className="text-textColor" href="#skills" onClick={toggleMenu}>
            {translations[language].nav.skills}
          </a>
          <a className="text-textColor" href="#projects" onClick={toggleMenu}>
            {translations[language].nav.projects}
          </a>
          <Button
            link={translations[language].nav.hireLink}
            text={translations[language].nav.hire}
          />

          {/* Tema Değiştirici ve Dil Seçeneği */}
          <div className="modes flex items-center justify-center mt-8 gap-x-4">
            <div className="flex items-center gap-x-4 lg:mt-4">
              <button
                onClick={toggleDarkMode}
                className="w-16 h-6 rounded-full p-1 transition-colors duration-300 bg-buttonColor"
              >
                <div
                  className={`w-6 h-2 bg-transparent rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    darkMode ? 'translate-x-8' : 'translate-x-0'
                  }`}
                >
                  {darkMode ? (
                    <img src={moonIcon} alt="Moon Icon" className="w-5 h-4" />
                  ) : (
                    <img src={sunIcon} alt="Sun Icon" className="w-5 h-4" />
                  )}
                </div>
              </button>
              <p className="text-textColor">
                {darkMode
                  ? translations[language].nav.mode2.toUpperCase()
                  : translations[language].nav.mode.toUpperCase()}
              </p>
            </div>
            <span> | </span>
            <div className="flex items-center gap-x-2 lg:mt-2">
              {language === 'tr' ? (
                <>
                  <p className="text-textColor">
                    {translations[language].nav.lang.lang1.toUpperCase()}
                  </p>
                  <button
                    className="text-buttonColor"
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
                  <p className="text-textColor">
                    {translations[language].nav.lang.lang2.toUpperCase()}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
