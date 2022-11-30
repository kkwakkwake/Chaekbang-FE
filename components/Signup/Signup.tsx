import { useState } from 'react';
import {
  SignupWrapper,
  SignupImageWrapper,
  FormWrapper,
  NameInputWrapper,
  EmailInputWrapper,
  PasswordInputWrapper,
  TermsWrapper,
  SignupButton,
} from './styled';

const Signup = () => {
  // const [changeColor, setChangeColor] = useState<string>("");

  // const change = () => {
  //   setChangeColor("blue");
  // };

  return (
    <SignupWrapper>
      <SignupImageWrapper>image</SignupImageWrapper>
      {/* <button onClick={change}>change</button>
      <EmotionTest color={changeColor}>emotion test</EmotionTest> */}
      <FormWrapper>
        <NameInputWrapper>
          <label>이름</label>
          <input type="text" />
        </NameInputWrapper>
        <EmailInputWrapper>
          <label>이메일</label>
          <input type="email" />
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <label>비밀번호</label>
          <input type="password" />
        </PasswordInputWrapper>
        <PasswordInputWrapper>
          <label>비밀번호 확인</label>
          <input type="password" />
        </PasswordInputWrapper>
        <TermsWrapper>
          <label>
            <input type="checkbox" name="checkAll" />
            모든 약관에 동의
          </label>
          <label>
            <input type="checkbox" name="check1" />
            개인정보처리방침에 동의 (필수)
          </label>
          <label>
            <input type="checkbox" name="check2" />
            이용 약관에 동의 (필수)
          </label>
          <SignupButton>회원가입</SignupButton>
        </TermsWrapper>
      </FormWrapper>
    </SignupWrapper>
  );
};

export default Signup;
