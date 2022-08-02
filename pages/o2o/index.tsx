import { Box, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Meta from '../../src/Meta';

const metaData = {
  title: '깊이를 마시다 | 인생 커피 맵',
  description: '유명 국내 로스터리들의 커피 데이터를 분석했습니다.',
  image: '/images/logo_name.png',
};

const O2OPage: NextPage = () => {
  const router = useRouter();

  return (
    <Container maxWidth="sm" sx={{ overflow: 'hidden' }}>
      <Meta data={metaData} />
      <Box
        onClick={() => router.push('/o2o/place')}
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          [theme.breakpoints.down('md')]: {
            transform: 'scale(1.5)',
          },
        })}
      >
        <Image
          src="/images/o2o/O2O PMF 메인.gif"
          alt="main image"
          width={960}
          height={1300}
          objectFit="contain"
        />
      </Box>
    </Container>
  );
};

export default O2OPage;
