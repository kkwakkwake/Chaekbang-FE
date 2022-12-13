import AppLayout from '../../components/AppLayout';
import Profile from '../../components/Profile/Profile';
import Head from 'next/head';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>내 계정 | 책방</title>
      </Head>
      <AppLayout>
        <Profile />
      </AppLayout>
    </>
  );
};

export default MyPage;
