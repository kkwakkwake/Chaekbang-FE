import { useRef, useState } from 'react';
import { FormWrapper } from '../styled';
import {
  LoginWrapper,
  LoginImageWrapper,
  EmailInputWrapper,
  PasswordInputWrapper,
  LoginButton,
} from './styled';

const Login = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [pwInput, setPwInput] = useState<string>('');

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('로그인', emailInput, pwInput);
  };

  return (
    <LoginWrapper>
      <LoginImageWrapper>image</LoginImageWrapper>
      <FormWrapper onSubmit={loginSubmit}>
        <EmailInputWrapper>
          <label>이메일</label>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <label>비밀번호</label>
          <input
            type="password"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            required
          />
        </PasswordInputWrapper>
        <LoginButton>로그인</LoginButton>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
