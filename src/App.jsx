import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import LanguageProvider from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Profile />
    </LanguageProvider>
  );
}

export default App;
