import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import LanguageProvider from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
    </LanguageProvider>
  );
}

export default App;
