import { Box } from '@mui/material';
import SectionMain from '../../src/cafe/lnading/SectionMain';
import LandingHeader from '../../src/landing/LandingHeader';
import Layout from '../../src/Layout';
import Meta from '../../src/Meta';
import * as fbq from '../../facebook/fpixel';
import SectionGradient from '../../src/cafe/lnading/SectionGradient';
import SectionForm from '../../src/cafe/lnading/SectionForm';
import KakaoShare from '../../src/cafe/lnading/KakaoShare';
import SectionContent from '../../src/cafe/lnading/SectionContent';
import KakaoChat from '../../src/cafe/lnading/KakaoChat';

const metaData = {
  title: '깊이를 마시다',
  description: '마시는 경험이 바뀌면 인생의 깊이가 달라집니다.',
  image: '/images/logo_name.png',
};

function LandingPage() {
  const handleScroll = () => {
    // console.log('window.scrollY : ', window.scrollY);

    // if (!window.scrollY) return;
    // 현재 위치가 이미 최상단일 경우 return

    // console.log('document.body.scrollHeight : ', document.body.scrollHeight);

    const register_form_location = (
      document.querySelector('#register_form_location') as any
    ).offsetTop!;

    // console.log('register_form_location : ', register_form_location);

    window.scrollTo({
      top: register_form_location,
      behavior: 'smooth',
    });

    fbq.event('Schedule', { event_name: '사전 알림 신청 이미지 클릭' });
  };

  return (
    <Layout header={<LandingHeader />}>
      <Meta data={metaData} />

      <Box display="flex" flexDirection={'column'} paddingX="1rem">
        {/* Section 1 (main) */}
        <SectionMain handleScroll={handleScroll} />

        {/* Section 2 */}
        <SectionContent />

        <SectionGradient handleScroll={handleScroll} />

        <SectionForm />

        {/* kakao */}
        <KakaoShare />

        {/* 채널톡 넣기 */}
        <KakaoChat />
      </Box>
    </Layout>
  );
}
export default LandingPage;
