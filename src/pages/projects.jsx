import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SectionCard from '../components/ui/section-card.jsx';

/**
 * Projects 페이지 (밝은 섹션)
 *
 * Example usage:
 * <Route path="/projects" element={ <Projects /> } />
 */
function Projects() {
  return (
    <Box
      sx={ {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 2, md: 4 },
        bgcolor: 'var(--color-accent)',
      } }
    >
      <Container maxWidth="md" sx={ { py: 4, px: { xs: 2, md: 3 } } }>
        <SectionCard
          role="Page · 포트폴리오 작품"
          title="Projects"
          description="Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다."
        />
      </Container>
    </Box>
  );
}

export default Projects;
