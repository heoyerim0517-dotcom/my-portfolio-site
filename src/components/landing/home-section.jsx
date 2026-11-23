import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SectionCard from '../ui/section-card.jsx';

/**
 * HomeSection 컴포넌트 (Home 페이지의 한 섹션: 배경 띠 + 카드)
 *
 * Props:
 * @param {string} id - 섹션 id (앵커용) [Required]
 * @param {string} role - 섹션 역할 라벨 [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 문구 [Required]
 * @param {string} background - 섹션 배경색 (CSS 변수) [Optional, 기본값: 'var(--color-bg-primary)']
 * @param {boolean} isDark - 카드를 어두운 색으로 표시할지 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <HomeSection id="hero" role="Section 01" title="Hero" description="설명" isDark />
 */
function HomeSection({
  id,
  role,
  title,
  description,
  background = 'var(--color-bg-primary)',
  isDark = false,
}) {
  return (
    <Box
      component="section"
      id={ id }
      sx={ {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        bgcolor: background,
      } }
    >
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 } } }>
        <SectionCard role={ role } title={ title } description={ description } isDark={ isDark } />
      </Container>
    </Box>
  );
}

export default HomeSection;
