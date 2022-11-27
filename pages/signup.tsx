import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Signup from "../components/Signup/Signup";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>회원가입 | 책방</title>
      </Head>

      <AppLayout>
        <Signup />
      </AppLayout>
    </>
  );
};

export default LoginPage;
