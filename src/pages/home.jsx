import Box from '@mui/material/Box';
import HomeSection from '../components/landing/home-section.jsx';

/**
 * Home 페이지에 표시할 5개 섹션 데이터
 */
const SECTIONS = [
  {
    id: 'hero',
    role: 'Section 01 · 메인 소개',
    title: 'Hero',
    description: '여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.',
    background: 'var(--color-bg-primary)',
    isDark: true,
  },
  {
    id: 'about',
    role: 'Section 02 · 자기소개',
    title: 'About Me',
    description: "여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.",
    background: 'var(--color-bg-dark)',
    isDark: false,
  },
  {
    id: 'skills',
    role: 'Section 03 · 기술 스택',
    title: 'Skill Tree',
    description: '여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.',
    background: 'var(--color-bg-secondary)',
    isDark: true,
  },
  {
    id: 'projects',
    role: 'Section 04 · 대표 작품',
    title: 'Projects',
    description: "여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.",
    background: 'var(--color-accent)',
    isDark: false,
  },
  {
    id: 'contact',
    role: 'Section 05 · 연락처',
    title: 'Contact',
    description: '여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.',
    background: 'var(--color-bg-primary)',
    isDark: true,
  },
];

/**
 * Home 페이지 (5개 섹션을 세로로 나열)
 *
 * Example usage:
 * <Route path="/" element={ <Home /> } />
 */
function Home() {
  return (
    <Box sx={ { width: '100%' } }>
      { SECTIONS.map((section) => (
        <HomeSection key={ section.id } { ...section } />
      )) }
    </Box>
  );
}

export default Home;
