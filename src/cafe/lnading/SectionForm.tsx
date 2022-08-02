import { Box, Typography } from '@mui/material';
import Register from '../../landing/register';

function SectionForm() {
  return (
    <>
      <Box id="register_form_location">
        <Typography
          variant="h4"
          fontWeight={'bold'}
          align="center"
          marginTop="3rem"
        >
          드링크뎁스에 <div>문의 및 제안하기</div>
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{ marginTop: '2rem', marginBottom: '0.5rem' }}
        >
          궁금하신 점이나 제안 주실 사항 있으시면 본인의 전화번호나 이메일
          주소와 함께
          <div>아래 양식에 남겨주세요.</div>
        </Typography>
      </Box>

      <Register />
    </>
  );
}
export default SectionForm;
