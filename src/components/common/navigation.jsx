import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

/**
 * 네비게이션 메뉴 데이터 (Home, About Me, Projects)
 */
const MENUS = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

/**
 * Navigation 컴포넌트 (Flexbox 기반 상단 네비게이션, 3개 탭)
 *
 * Example usage:
 * <Navigation />
 */
function Navigation() {
  return (
    <Box
      component="nav"
      sx={ {
        position: 'sticky',
        top: 0,
        zIndex: 10,
        width: '100%',
        height: '64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 2, md: 3 },
        bgcolor: 'var(--color-bg-dark)',
        color: 'var(--color-text-inverse)',
        borderBottom: '1px solid var(--color-primary-light)',
      } }
    >
      <Box sx={ { fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 700, whiteSpace: 'nowrap' } }>
        Portfolio
      </Box>

      <Box
        component="ul"
        sx={ { display: 'flex', alignItems: 'center', gap: { xs: 0.5, md: 1 }, m: 0, p: 0, listStyle: 'none' } }
      >
        { MENUS.map(({ label, to }) => (
          <Box component="li" key={ to } sx={ { display: 'flex' } }>
            <Box
              component={ NavLink }
              to={ to }
              end={ to === '/' }
              sx={ {
                px: { xs: 1.5, md: 2 },
                py: 1,
                borderRadius: 1,
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'var(--color-accent)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s, background-color 0.2s',
                '&:hover': { color: 'var(--color-text-inverse)' },
                '&.active': {
                  color: 'var(--color-text-inverse)',
                  fontWeight: 700,
                  bgcolor: 'var(--color-primary-light)',
                },
                '&:focus-visible': { outline: '2px solid var(--color-text-inverse)', outlineOffset: '2px' },
              } }
            >
              { label }
            </Box>
          </Box>
        )) }
      </Box>
    </Box>
  );
}

export default Navigation;
