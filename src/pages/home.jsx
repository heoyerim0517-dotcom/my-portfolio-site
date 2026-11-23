import Box from '@mui/material/Box';
import AboutMe from './about-me.jsx';
import Projects from './projects.jsx';

/**
 * 메인 페이지 (모든 섹션을 한 화면에 세로로 나열)
 *
 * Example usage:
 * <Route path="/" element={ <Home /> } />
 */
function Home() {
  return (
    <Box sx={ { width: '100%' } }>
      <AboutMe />
      <Projects />
    </Box>
  );
}

export default Home;
