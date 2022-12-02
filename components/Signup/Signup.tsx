import { useCallback, useEffect, useRef, useState } from 'react';
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
  // const [changeColor, setChangeColor] = useState<string>('');

  // const change = () => {
  //   setChangeColor('blue');
  // };

  const [pwInput, setPwInput] = useState<string>('');
  const [pwCheckInput, setPwCheckInput] = useState<string>('');
  const [isPwMatch, setIsPwMatch] = useState<boolean>(false);

  const pwRef = useRef<HTMLInputElement>(null);
  const pwCheckRef = useRef<HTMLInputElement>(null);

  const signupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pwInput === pwCheckInput) {
      setIsPwMatch(false);
      if (isCheckedAll) {
        console.log('회원가입');
      }
    } else {
      setIsPwMatch(true);
    }
  };

  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isCheckedOne, setIsCheckedOne] = useState<boolean>(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState<boolean>(false);

  useEffect(() => {
    if (isCheckedOne && isCheckedTwo) {
      setIsCheckedAll(true);
    } else {
      setIsCheckedAll(false);
    }
  }, [isCheckedOne, isCheckedTwo]);

  const checkedAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsCheckedOne(true);
      setIsCheckedTwo(true);
    } else {
      setIsCheckedOne(false);
      setIsCheckedTwo(false);
    }
  };

  const checkedOneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsCheckedOne(true);
    } else {
      setIsCheckedOne(false);
    }
  };

  const checkedTwoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsCheckedTwo(true);
    } else {
      setIsCheckedTwo(false);
    }
  };

  return (
    <SignupWrapper>
      <SignupImageWrapper>image</SignupImageWrapper>
      {/* <button onClick={change}>change</button>
      <EmotionTest color={changeColor}>emotion test</EmotionTest> */}
      <FormWrapper onSubmit={signupSubmit}>
        <NameInputWrapper>
          <label>이름</label>
          <input type="text" required />
        </NameInputWrapper>
        <EmailInputWrapper>
          <div>
            <label>이메일</label>
            <span>중복확인</span>
          </div>
          <input type="email" required />
        </EmailInputWrapper>
        <PasswordInputWrapper>
          <label>비밀번호</label>
          <input
            type="password"
            ref={pwRef}
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            required
          />
        </PasswordInputWrapper>

        <PasswordInputWrapper>
          <label>비밀번호 확인</label>
          <input
            type="password"
            ref={pwCheckRef}
            value={pwCheckInput}
            onChange={(e) => setPwCheckInput(e.target.value)}
            required
          />
          {isPwMatch && <span>비밀번호가 일치하지 않습니다</span>}
        </PasswordInputWrapper>
        <TermsWrapper>
          <label>
            <input
              type="checkbox"
              name="checkAll"
              checked={isCheckedAll}
              onChange={checkedAllHandler}
            />
            약관 전체동의
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCheckedOne}
              name="check1"
              onChange={checkedOneHandler}
            />
            이용약관 동의(필수)
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCheckedTwo}
              name="check2"
              onChange={checkedTwoHandler}
            />
            개인정보 수집 및 이용동의(필수)
          </label>
          <SignupButton>회원가입</SignupButton>
        </TermsWrapper>
      </FormWrapper>
    </SignupWrapper>
  );
};

export default Signup;
