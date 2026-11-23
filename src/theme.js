import { createTheme } from '@mui/material/styles';

/**
 * 컬러 팔레트 디자인 시스템(모노크롬)을 MUI 테마에 적용
 * 값은 src/index.css 의 CSS 변수와 동일하게 유지한다.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#0D0D0D',
      light: '#333333',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E1E0DC',
      contrastText: '#0D0D0D',
    },
    background: {
      default: '#E1E0DC',
      paper: '#F6F5F3',
    },
    text: {
      primary: '#0D0D0D',
      secondary: '#444444',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
