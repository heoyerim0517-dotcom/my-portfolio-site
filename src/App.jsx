import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/about-me.jsx';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <AboutMe /> } />
      <Route path="/projects" element={ <Projects /> } />
    </Routes>
  );
}

export default App;
