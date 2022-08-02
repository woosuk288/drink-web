import { Box, Button, Typography } from '@mui/material';

type SectionGradientProps = {
  handleScroll: () => void;
};

function SectionGradient({ handleScroll }: SectionGradientProps) {
  return (
    <Box
      marginTop="3rem"
      padding="100px 1rem"
      marginLeft="-1rem"
      width="calc(100% + 2rem)"
      sx={{
        background:
          'linear-gradient(to bottom, rgba(106,215,255,1) 0%, rgba(79,156,255,0.7) 30%, rgba(0,0,0,0) 100%)',
      }}
    >
      <Typography variant="h5" fontWeight={'bold'} align="center" color="white">
        개성있는 메뉴판으로 손님에게 특별한 가치를 공유하고 싶으시다면?
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="white"
        sx={{ marginTop: '2rem' }}
      >
        드링크뎁스를 이용해보세요!
      </Typography>

      <Box marginTop="3rem" textAlign="center">
        <Button
          variant="contained"
          sx={{
            padding: ' 1rem 2rem',
            borderRadius: '30px',
            fontSize: '1.25rem',
          }}
          onClick={handleScroll}
        >
          사전 알림 신청
        </Button>
      </Box>
    </Box>
  );
}
export default SectionGradient;
