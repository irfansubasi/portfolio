import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import LanguageProvider from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Skills />
    </LanguageProvider>
  );
}

export default App;
