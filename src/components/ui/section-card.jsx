import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/**
 * SectionCard 컴포넌트 (섹션 구분용 MUI Card)
 *
 * Props:
 * @param {string} role - 섹션의 역할을 알려주는 작은 라벨 [Required]
 * @param {string} title - 카드 제목 [Required]
 * @param {string} description - 카드 설명 문구 [Required]
 * @param {boolean} isDark - 어두운 배경(반전 색상) 사용 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <SectionCard title="About Me" description="소개가 들어갈 예정입니다." isDark />
 */
function SectionCard({ role, title, description, isDark = false }) {
  return (
    <Card
      elevation={ 0 }
      sx={ {
        width: '100%',
        borderRadius: 2,
        bgcolor: isDark ? 'var(--color-bg-dark)' : 'var(--color-bg-secondary)',
        color: isDark ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
        border: '1px solid',
        borderColor: isDark ? 'var(--color-primary-light)' : 'var(--color-accent)',
      } }
    >
      <CardContent sx={ { p: { xs: 3, md: 6 } } }>
        <Typography
          sx={ {
            fontSize: { xs: '0.8rem', md: '0.9rem' },
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            lineHeight: 1.6,
            mb: 1,
            color: isDark ? 'var(--color-accent)' : 'var(--color-text-muted)',
          } }
        >
          { role }
        </Typography>
        <Typography
          component="h1"
          sx={ {
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            color: 'inherit',
          } }
        >
          { title }
        </Typography>
        <Typography
          sx={ {
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: isDark ? 'var(--color-accent)' : 'var(--color-text-secondary)',
          } }
        >
          { description }
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SectionCard;
