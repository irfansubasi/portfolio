import axios from 'axios';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import DarkModeProvider, { useDarkMode } from './contexts/DarkModeContext';
import LanguageProvider from './contexts/LanguageContext';
import { translations as data } from './data/data';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios
      .post('https://reqres.in/api/workintech', data)
      .then((res) => {
        console.log('Data sent successfully', res.data);
      })
      .catch((err) => {
        console.error('Error sending data :', err);
      });
  }, []);

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </DarkModeProvider>
  );
}

function AppContent() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="bg-backgroundColor"
      data-theme={darkMode ? 'dark' : 'light'}
    >
      <Navbar />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
