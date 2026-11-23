import { Navigate, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/about-me.jsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/about" replace /> } />
      <Route path="/about" element={ <AboutMe /> } />
      <Route path="/projects" element={ <Projects /> } />
    </Routes>
  );
}

export default App;
