import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/common/navigation.jsx';
import AboutMe from './pages/about-me.jsx';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <Box sx={ { width: '100%', minHeight: '100vh' } }>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <AboutMe /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
    </Box>
  );
}

export default App;
