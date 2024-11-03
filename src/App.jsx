import './App.css';
import Navbar from './components/Navbar';
import LanguageProvider from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}

export default App;
