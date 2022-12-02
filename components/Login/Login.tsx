import { FormWrapper } from '../Signup/styled';
import { LoginWrapper, LoginImageWrapper } from './styled';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginImageWrapper>image</LoginImageWrapper>
      <FormWrapper>
        <div>
          <label>이메일</label>
          <input type="text" />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <button>로그인</button>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
