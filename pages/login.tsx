import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Login from "../components/Login/Login";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>로그인 | 책방</title>
      </Head>

      <AppLayout>
        <div>
          <Login />
        </div>
      </AppLayout>
    </>
  );
};

export default LoginPage;
