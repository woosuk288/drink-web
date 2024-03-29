import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Layout from '../src/Layout';
import SectionA from '../src/intro/SectionA';
import Meta from '../src/Meta';
import SectionB from '../src/intro/SectionB';
import SectionC from '../src/intro/SectionC';
import { Box } from '@mui/material';

const metaData = {
  title: '깊이를 마시다',
  description: '마시는 경험이 바뀌면 인생의 깊이가 달라집니다.',
  image: '/images/logo_name.png',
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Meta data={metaData} />
      <a
        href="https://pf.kakao.com/_ktxnJb/chat"
        target="_blank"
        style={{ position: 'fixed', right: 20, bottom: 10, zIndex: 100 }}
        rel="noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/btn_kakao.png"
          alt="카카오톡투명로고"
          width={64}
          height={64}
        />
      </a>

      <Box px={{ xs: '20px', lg: 0 }}>
        <SectionA />
        <SectionB />
        <SectionC />
      </Box>

      <div style={{ marginBottom: '100px' }}></div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
