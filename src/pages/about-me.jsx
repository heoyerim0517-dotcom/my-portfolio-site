import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SectionCard from '../components/ui/section-card.jsx';

/**
 * About Me 페이지 (어두운 반전 섹션)
 *
 * Example usage:
 * <Route path="/about" element={ <AboutMe /> } />
 */
function AboutMe() {
  return (
    <Box
      sx={ {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 2, md: 4 },
        bgcolor: 'var(--color-bg-primary)',
      } }
    >
      <Container maxWidth="md" sx={ { py: 4, px: { xs: 2, md: 3 } } }>
        <SectionCard
          role="Section 03 · 자기소개"
          title="About Me"
          description="About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다."
          isDark
        />
      </Container>
    </Box>
  );
}

export default AboutMe;
